/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Ingredients = "ingredients",
	Recipes = "recipes",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type IngredientsRecord = {
	name?: string
	quantity?: number
}

export type RecipesRecord = {
	name?: string
	rating?: number
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type IngredientsResponse<Texpand = unknown> = Required<IngredientsRecord> & BaseSystemFields<Texpand>
export type RecipesResponse<Texpand = unknown> = Required<RecipesRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	ingredients: IngredientsRecord
	recipes: RecipesRecord
	users: UsersRecord
}

export type CollectionResponses = {
	ingredients: IngredientsResponse
	recipes: RecipesResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'ingredients'): RecordService<IngredientsResponse>
	collection(idOrName: 'recipes'): RecordService<RecipesResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
