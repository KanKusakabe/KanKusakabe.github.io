<?php
// ブラウザの言語設定を取得
$lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);

// 言語に応じてリダイレクト
if ($lang === 'ja') {
    header("Location: https://kankusakabe.github.io/Portfolio/ja");
} else {
    header("Location: https://kankusakabe.github.io/Portfolio/");
}
exit();
?>