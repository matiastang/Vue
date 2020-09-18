<template>
<div>
    <textarea class="textarea-item" placeholder={{props.placeholder}} rows="1" ref="textareaInput" v-model="textareaObj.text"></textarea>
</div>
</template>

<script>
export default {
    props: {
        placeholder: String
    },
    setup(props, context) {

        console.log(props)

        // Attributes (Non-reactive object)
        console.log(context.attrs)

        // Slots (Non-reactive object)
        console.log(context.slots)

        // Emit Events (Method)
        console.log(context.emit)
    },
    data() {
        return {
            textareaObj: {
                class: height: 60,
                text: '默认填入的内容'
            }
        }
    }
}
</script>
