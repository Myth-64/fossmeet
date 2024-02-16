import { type SchemaTypeDefinition } from 'sanity'
import SpeakerSchema from './speaker'
import WorkshopSchema from './workshop'
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        SpeakerSchema,
        WorkshopSchema,
    ],
}
