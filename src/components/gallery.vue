<template>
    <div class="k-block-type-gallery" >
            <template v-if="content.gallery.length">
                <ul @click="open">
                    <li v-for="(item, index) in gallery" :key="index" class="image-wrapper">
                        <img :src="item.image.url" :alt="item.alt">
                    </li>

                </ul>
            </template>
            <template v-else>
                <ul @click="open">
                    <li
                        v-for="index in 5"
                        :key="index"
                        class="k-block-type-gallery-placeholder"
                    >
                        <k-aspect-ratio :ratio="ratio" />
                    </li>
                </ul>
            </template>

        <figcaption v-if="content.caption">
            {{ content.caption }}
        </figcaption>
    </div>
</template>

<script>
/**
 * @displayName BlockTypeGallery
 * @internal
 */
export default {

	computed: {
        layout() {
            return this.content.layout;
        },
        gallery() {
            const gallery = [];
            this.content.gallery.forEach((element,index) => {  
                var imageRation = "";
                gallery[index] = {
                        "image": element.image[0],
                        "alt": element.alt,
                        "caption": element.caption,
                        "class": "",
                        "error": false
                    };
            });
            return gallery;
        }
	},
};
</script>

<style>
.k-block-type-gallery ul {
	display: grid;
	grid-gap: 0.75rem;
	grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
	line-height: 0;
	align-items: center;
	cursor: pointer;
}
.k-block-type-gallery li {
    flex: 0.75;
}
.k-block-type-gallery img {
    width: 100%;
    height: auto;
}
.k-block-type-gallery-placeholder {
	background: var(--color-background);
}

.k-block-type-gallery figcaption {
    text-align: left;

}

</style>