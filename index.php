<?php

Kirby::plugin('baptiste/kirby-gallery-block', [
    'blueprints' => [
        'blocks/gallery' => __DIR__ . '/blueprints/blocks/gallery.yml',
    ],
    'snippets' => [
        'blocks/gallery' => __DIR__ . '/snippets/blocks/gallery.php',
    ],
    'translations' => [
        'fr' => require 'languages/fr.php'
    ]
]);