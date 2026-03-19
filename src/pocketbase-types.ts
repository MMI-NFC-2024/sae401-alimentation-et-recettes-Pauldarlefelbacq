/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Commentaires = "Commentaires",
	CommentairesCoach = "Commentaires_coach",
	EtapesPrep = "Etapes_prep",
	Favori = "Favori",
	FicheCoach = "Fiche_coach",
	Ingredients = "Ingredients",
	Recettes = "Recettes",
	Authorigins = "_authOrigins",
	Externalauths = "_externalAuths",
	Mfas = "_mfas",
	Otps = "_otps",
	Superusers = "_superusers",
	IngredientsDansRecette = "ingredients_dans_recette",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type IsoAutoDateString = string & { readonly autodate: unique symbol }
export type RecordIdString = string
export type FileNameString = string & { readonly filename: unique symbol }
export type HTMLString = string

type ExpandType<T> = unknown extends T
	? T extends unknown
		? { expand?: unknown }
		: { expand: T }
	: { expand: T }

// System fields
export type BaseSystemFields<T = unknown> = {
	id: RecordIdString
	collectionId: string
	collectionName: Collections
} & ExpandType<T>

export type AuthSystemFields<T = unknown> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CommentairesRecord = {
	contenu?: string
	created: IsoAutoDateString
	id: string
	note?: number
	recette?: RecordIdString
	updated: IsoAutoDateString
	user?: RecordIdString
}

export type CommentairesCoachRecord = {
	coach?: RecordIdString
	contenu?: string
	created: IsoAutoDateString
	id: string
	note?: number
	updated: IsoAutoDateString
	user?: RecordIdString
}

export type EtapesPrepRecord = {
	contenu?: string
	created: IsoAutoDateString
	id: string
	recette?: RecordIdString
	updated: IsoAutoDateString
}

export type FavoriRecord = {
	created: IsoAutoDateString
	id: string
	recette?: RecordIdString
	updated: IsoAutoDateString
	user?: RecordIdString
}

export type FicheCoachRecord = {
	created: IsoAutoDateString
	id: string
	lien?: string
	updated: IsoAutoDateString
	user?: RecordIdString
}

export enum IngredientsTypeOptions {
	"légume" = "légume",
	"fruit" = "fruit",
	"féculent" = "féculent",
	"sucré" = "sucré",
	"viande" = "viande",
	"laitage" = "laitage",
	"condiment" = "condiment",
	"assaisonement" = "assaisonement",
}
export type IngredientsRecord = {
	calories?: number
	created: IsoAutoDateString
	glucides?: number
	id: string
	image?: FileNameString
	mat_grasses?: number
	nom?: string
	proteines?: number
	type?: IngredientsTypeOptions
	unitaire?: boolean
	updated: IsoAutoDateString
	user?: RecordIdString
}

export enum RecettesTypeOptions {
	"végétarienne" = "végétarienne",
	"omnivore" = "omnivore",
	"végan" = "végan",
}
export type RecettesRecord = {
	created: IsoAutoDateString
	description?: string
	id: string
	image?: FileNameString
	nb_personnes?: number
	temps_cuisson?: number
	temps_prep?: number
	titre?: string
	type?: RecettesTypeOptions
	updated: IsoAutoDateString
	user?: RecordIdString
}

export type AuthoriginsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	fingerprint: string
	id: string
	recordRef: string
	updated: IsoAutoDateString
}

export type ExternalauthsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	provider: string
	providerId: string
	recordRef: string
	updated: IsoAutoDateString
}

export type MfasRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	method: string
	recordRef: string
	updated: IsoAutoDateString
}

export type OtpsRecord = {
	collectionRef: string
	created: IsoAutoDateString
	id: string
	password: string
	recordRef: string
	sentTo?: string
	updated: IsoAutoDateString
}

export type SuperusersRecord = {
	created: IsoAutoDateString
	email: string
	emailVisibility?: boolean
	id: string
	password: string
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

export enum IngredientsDansRecetteUniteOptions {
	"g" = "g",
	"c. à soupe" = "c. à soupe",
	"ml" = "ml",
	"c. à café" = "c. à café",
}
export type IngredientsDansRecetteRecord = {
	created: IsoAutoDateString
	id: string
	ingredient?: RecordIdString
	quantite?: number
	recette?: RecordIdString
	unite?: IngredientsDansRecetteUniteOptions
	updated: IsoAutoDateString
}

export enum UsersSpecialisationOptions {
	"nutritioniste" = "nutritioniste",
	"diététicien" = "diététicien",
	"mental" = "mental",
	"motivation" = "motivation",
}
export type UsersRecord = {
	admin?: boolean
	avatar?: FileNameString
	coach?: boolean
	created: IsoAutoDateString
	description?: string
	email: string
	emailVisibility?: boolean
	id: string
	name?: string
	password: string
	pseudo?: string
	specialisation?: UsersSpecialisationOptions
	surname?: string
	tokenKey: string
	updated: IsoAutoDateString
	verified?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type CommentairesResponse<Texpand = unknown> = Required<CommentairesRecord> & BaseSystemFields<Texpand>
export type CommentairesCoachResponse<Texpand = unknown> = Required<CommentairesCoachRecord> & BaseSystemFields<Texpand>
export type EtapesPrepResponse<Texpand = unknown> = Required<EtapesPrepRecord> & BaseSystemFields<Texpand>
export type FavoriResponse<Texpand = unknown> = Required<FavoriRecord> & BaseSystemFields<Texpand>
export type FicheCoachResponse<Texpand = unknown> = Required<FicheCoachRecord> & BaseSystemFields<Texpand>
export type IngredientsResponse<Texpand = unknown> = Required<IngredientsRecord> & BaseSystemFields<Texpand>
export type RecettesResponse<Texpand = unknown> = Required<RecettesRecord> & BaseSystemFields<Texpand>
export type AuthoriginsResponse<Texpand = unknown> = Required<AuthoriginsRecord> & BaseSystemFields<Texpand>
export type ExternalauthsResponse<Texpand = unknown> = Required<ExternalauthsRecord> & BaseSystemFields<Texpand>
export type MfasResponse<Texpand = unknown> = Required<MfasRecord> & BaseSystemFields<Texpand>
export type OtpsResponse<Texpand = unknown> = Required<OtpsRecord> & BaseSystemFields<Texpand>
export type SuperusersResponse<Texpand = unknown> = Required<SuperusersRecord> & AuthSystemFields<Texpand>
export type IngredientsDansRecetteResponse<Texpand = unknown> = Required<IngredientsDansRecetteRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	Commentaires: CommentairesRecord
	Commentaires_coach: CommentairesCoachRecord
	Etapes_prep: EtapesPrepRecord
	Favori: FavoriRecord
	Fiche_coach: FicheCoachRecord
	Ingredients: IngredientsRecord
	Recettes: RecettesRecord
	_authOrigins: AuthoriginsRecord
	_externalAuths: ExternalauthsRecord
	_mfas: MfasRecord
	_otps: OtpsRecord
	_superusers: SuperusersRecord
	ingredients_dans_recette: IngredientsDansRecetteRecord
	users: UsersRecord
}

export type CollectionResponses = {
	Commentaires: CommentairesResponse
	Commentaires_coach: CommentairesCoachResponse
	Etapes_prep: EtapesPrepResponse
	Favori: FavoriResponse
	Fiche_coach: FicheCoachResponse
	Ingredients: IngredientsResponse
	Recettes: RecettesResponse
	_authOrigins: AuthoriginsResponse
	_externalAuths: ExternalauthsResponse
	_mfas: MfasResponse
	_otps: OtpsResponse
	_superusers: SuperusersResponse
	ingredients_dans_recette: IngredientsDansRecetteResponse
	users: UsersResponse
}

// Utility types for create/update operations

type ProcessCreateAndUpdateFields<T> = Omit<{
	// Omit AutoDate fields
	[K in keyof T as Extract<T[K], IsoAutoDateString> extends never ? K : never]: 
		// Convert FileNameString to File
		T[K] extends infer U ? 
			U extends (FileNameString | FileNameString[]) ? 
				U extends any[] ? File[] : File 
			: U
		: never
}, 'id'>

// Create type for Auth collections
export type CreateAuth<T> = {
	id?: RecordIdString
	email: string
	emailVisibility?: boolean
	password: string
	passwordConfirm: string
	verified?: boolean
} & ProcessCreateAndUpdateFields<T>

// Create type for Base collections
export type CreateBase<T> = {
	id?: RecordIdString
} & ProcessCreateAndUpdateFields<T>

// Update type for Auth collections
export type UpdateAuth<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof AuthSystemFields>
> & {
	email?: string
	emailVisibility?: boolean
	oldPassword?: string
	password?: string
	passwordConfirm?: string
	verified?: boolean
}

// Update type for Base collections
export type UpdateBase<T> = Partial<
	Omit<ProcessCreateAndUpdateFields<T>, keyof BaseSystemFields>
>

// Get the correct create type for any collection
export type Create<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? CreateAuth<CollectionRecords[T]>
		: CreateBase<CollectionRecords[T]>

// Get the correct update type for any collection
export type Update<T extends keyof CollectionResponses> =
	CollectionResponses[T] extends AuthSystemFields
		? UpdateAuth<CollectionRecords[T]>
		: UpdateBase<CollectionRecords[T]>

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = {
	collection<T extends keyof CollectionResponses>(
		idOrName: T
	): RecordService<CollectionResponses[T]>
} & PocketBase
