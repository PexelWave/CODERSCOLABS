import { defineType, defineField } from "sanity";

export default defineType({
    name: 'muxVideoInput',
    title: 'Mux Video Input',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'video',
            title: 'Video File',
            type: 'mux.video'
        })
    ]

})