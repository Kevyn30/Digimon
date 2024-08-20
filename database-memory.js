import { randomUUID } from "node:crypto"

export class DatabaseMemory {
    #livros = new Map()
}