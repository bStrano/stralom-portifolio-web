export type GenericLookupInterface<T extends string | number | symbol, E> =
    {
        [key in T]: E;
    };
