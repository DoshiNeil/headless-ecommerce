
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateProductInput {
    name: string;
    description?: Nullable<string>;
    price?: Nullable<number>;
    stock?: Nullable<number>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract products(): Nullable<Nullable<Product>[]> | Promise<Nullable<Nullable<Product>[]>>;

    abstract product(id: string): Nullable<Product> | Promise<Nullable<Product>>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createProduct(createProductInput?: Nullable<CreateProductInput>): Nullable<Product> | Promise<Nullable<Product>>;
}

export class Product {
    __typename?: 'Product';
    id: string;
    name: string;
    description?: Nullable<string>;
    price?: Nullable<number>;
    stock?: Nullable<number>;
    category?: Nullable<string>;
    seoTitle?: Nullable<string>;
    seoDescription?: Nullable<string>;
}

type Nullable<T> = T | null;
