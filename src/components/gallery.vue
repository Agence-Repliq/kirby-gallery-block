<template>
    <div class="k-block-type-gallery" >
        <ul @click="open">
            <template v-if="content.gallery.length">
                <li v-for="(item, index) in gallery" :key="index" class="image-wrapper">
                    <img :src="item.image.url" :alt="item.alt">
                </li>
            </template>
            <template v-else>
                <li
					v-for="index in 5"
					:key="index"
					class="k-block-type-gallery-placeholder"
				>
					<k-aspect-ratio :ratio="ratio" />
				</li>
            </template>
        </ul>
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
    data() {
        return {
            file: null
        };
    },
	computed: {
        gallery() {
            const gallery = [];
            this.content.gallery.forEach((element,index) => {
                gallery[index] = {
                    "image": element.image[0],
                    "ratio": console.log(element.image[0]),
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
	display: flex;
    width: 100%;
	line-height: 0;
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
</style>