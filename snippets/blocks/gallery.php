<div class="block-gallery">
    <?php foreach($block->gallery()->toStructure()->chunk($block->layout()->toInt()) as $line): ?>
        <ul class="block-gallery-line">
            <?php foreach( $line as $item): ?>
                <?php $src = $item->image()->toFile(); ?>
                <li style="flex:<?= $src->ratio() ?>;">
                    <figure>
                        <div style="position: relative;">
                            <picture>
                                <source srcset="<?= $src->srcset(($line->count() > 1)? "md" : "default") ?>" type="image/webp">
                                <img src="<?= $src->url() ?>" alt="<?= $item->alt() ?>">
                            </picture>
                            <a href="<?= $src->url() ?>" class="button-open" title="Ouvrir l'image en plein écran">
                                <svg viewBox="0 0 24 24" id="open_in_new" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 19H5V5H12V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V12H19V19ZM14 3V5H17.59L7.76 14.83L9.17 16.24L19 6.41V10H21V3H14Z" />
                                </svg>
                            </a>
                        </div>
                    </figure>
                </li>
            <?php endforeach ?>
        </ul>
    <?php endforeach ?>
    <?php if($caption = $block->caption()): ?>
        <figcaption>
            <?= $caption ?> 
        </figcaption>
    <?php endif; ?>
</div>