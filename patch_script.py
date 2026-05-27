import re

with open('generate_news.py', 'r') as f:
    code = f.read()

# Add loading of existing news_data.js to extract token_usage
load_usage_code = """
    output_dir = os.path.join(os.path.dirname(__file__), 'news')
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, 'news_data.js')
    
    token_usage = {}
    try:
        if os.path.exists(output_path):
            with open(output_path, 'r', encoding='utf-8') as f:
                content = f.read()
                json_text = content[content.find('{'):content.rfind('}')+1]
                import json
                prev_data = json.loads(json_text)
                token_usage = prev_data.get("token_usage", {})
    except Exception as e:
        print(f"Previous token usage could not be loaded: {e}")

    current_month = now.strftime("%Y-%m")
    current_day = now.strftime("%Y-%m-%d")
    
    run_tokens = total_api_usage["total_tokens"]
    token_usage[current_month] = token_usage.get(current_month, 0) + run_tokens
    token_usage[current_day] = token_usage.get(current_day, 0) + run_tokens
    
    final_response["token_usage"] = token_usage
"""

# We need to insert this right before saving output_path.
# The saving block starts with:
#     output_dir = os.path.join(os.path.dirname(__file__), 'news')
#     os.makedirs(output_dir, exist_ok=True)
#     output_path = os.path.join(output_dir, 'news_data.js')

target_str = """    output_dir = os.path.join(os.path.dirname(__file__), 'news')
    os.makedirs(output_dir, exist_ok=True)
    output_path = os.path.join(output_dir, 'news_data.js')"""

new_code = code.replace(target_str, load_usage_code)

with open('generate_news.py', 'w') as f:
    f.write(new_code)
    
print("generate_news.py patched")
