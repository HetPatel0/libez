
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model item
 * 
 */
export type item = $Result.DefaultSelection<Prisma.$itemPayload>
/**
 * Model itemtransaction
 * 
 */
export type itemtransaction = $Result.DefaultSelection<Prisma.$itemtransactionPayload>
/**
 * Model librarian
 * 
 */
export type librarian = $Result.DefaultSelection<Prisma.$librarianPayload>
/**
 * Model patron
 * 
 */
export type patron = $Result.DefaultSelection<Prisma.$patronPayload>
/**
 * Model user_type
 * 
 */
export type user_type = $Result.DefaultSelection<Prisma.$user_typePayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.item`: Exposes CRUD operations for the **item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.itemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.itemtransaction`: Exposes CRUD operations for the **itemtransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Itemtransactions
    * const itemtransactions = await prisma.itemtransaction.findMany()
    * ```
    */
  get itemtransaction(): Prisma.itemtransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.librarian`: Exposes CRUD operations for the **librarian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Librarians
    * const librarians = await prisma.librarian.findMany()
    * ```
    */
  get librarian(): Prisma.librarianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patron`: Exposes CRUD operations for the **patron** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patrons
    * const patrons = await prisma.patron.findMany()
    * ```
    */
  get patron(): Prisma.patronDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_type`: Exposes CRUD operations for the **user_type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_types
    * const user_types = await prisma.user_type.findMany()
    * ```
    */
  get user_type(): Prisma.user_typeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    item: 'item',
    itemtransaction: 'itemtransaction',
    librarian: 'librarian',
    patron: 'patron',
    user_type: 'user_type',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "item" | "itemtransaction" | "librarian" | "patron" | "user_type" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      item: {
        payload: Prisma.$itemPayload<ExtArgs>
        fields: Prisma.itemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findFirst: {
            args: Prisma.itemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          findMany: {
            args: Prisma.itemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          create: {
            args: Prisma.itemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          createMany: {
            args: Prisma.itemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          delete: {
            args: Prisma.itemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          update: {
            args: Prisma.itemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          deleteMany: {
            args: Prisma.itemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>[]
          }
          upsert: {
            args: Prisma.itemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.itemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      itemtransaction: {
        payload: Prisma.$itemtransactionPayload<ExtArgs>
        fields: Prisma.itemtransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.itemtransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.itemtransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>
          }
          findFirst: {
            args: Prisma.itemtransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.itemtransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>
          }
          findMany: {
            args: Prisma.itemtransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>[]
          }
          create: {
            args: Prisma.itemtransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>
          }
          createMany: {
            args: Prisma.itemtransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.itemtransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>[]
          }
          delete: {
            args: Prisma.itemtransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>
          }
          update: {
            args: Prisma.itemtransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>
          }
          deleteMany: {
            args: Prisma.itemtransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.itemtransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.itemtransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>[]
          }
          upsert: {
            args: Prisma.itemtransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$itemtransactionPayload>
          }
          aggregate: {
            args: Prisma.ItemtransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItemtransaction>
          }
          groupBy: {
            args: Prisma.itemtransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemtransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.itemtransactionCountArgs<ExtArgs>
            result: $Utils.Optional<ItemtransactionCountAggregateOutputType> | number
          }
        }
      }
      librarian: {
        payload: Prisma.$librarianPayload<ExtArgs>
        fields: Prisma.librarianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.librarianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.librarianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>
          }
          findFirst: {
            args: Prisma.librarianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.librarianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>
          }
          findMany: {
            args: Prisma.librarianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>[]
          }
          create: {
            args: Prisma.librarianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>
          }
          createMany: {
            args: Prisma.librarianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.librarianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>[]
          }
          delete: {
            args: Prisma.librarianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>
          }
          update: {
            args: Prisma.librarianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>
          }
          deleteMany: {
            args: Prisma.librarianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.librarianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.librarianUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>[]
          }
          upsert: {
            args: Prisma.librarianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$librarianPayload>
          }
          aggregate: {
            args: Prisma.LibrarianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibrarian>
          }
          groupBy: {
            args: Prisma.librarianGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibrarianGroupByOutputType>[]
          }
          count: {
            args: Prisma.librarianCountArgs<ExtArgs>
            result: $Utils.Optional<LibrarianCountAggregateOutputType> | number
          }
        }
      }
      patron: {
        payload: Prisma.$patronPayload<ExtArgs>
        fields: Prisma.patronFieldRefs
        operations: {
          findUnique: {
            args: Prisma.patronFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.patronFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>
          }
          findFirst: {
            args: Prisma.patronFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.patronFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>
          }
          findMany: {
            args: Prisma.patronFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>[]
          }
          create: {
            args: Prisma.patronCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>
          }
          createMany: {
            args: Prisma.patronCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.patronCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>[]
          }
          delete: {
            args: Prisma.patronDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>
          }
          update: {
            args: Prisma.patronUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>
          }
          deleteMany: {
            args: Prisma.patronDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.patronUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.patronUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>[]
          }
          upsert: {
            args: Prisma.patronUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$patronPayload>
          }
          aggregate: {
            args: Prisma.PatronAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatron>
          }
          groupBy: {
            args: Prisma.patronGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatronGroupByOutputType>[]
          }
          count: {
            args: Prisma.patronCountArgs<ExtArgs>
            result: $Utils.Optional<PatronCountAggregateOutputType> | number
          }
        }
      }
      user_type: {
        payload: Prisma.$user_typePayload<ExtArgs>
        fields: Prisma.user_typeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_typeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_typeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>
          }
          findFirst: {
            args: Prisma.user_typeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_typeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>
          }
          findMany: {
            args: Prisma.user_typeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>[]
          }
          create: {
            args: Prisma.user_typeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>
          }
          createMany: {
            args: Prisma.user_typeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_typeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>[]
          }
          delete: {
            args: Prisma.user_typeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>
          }
          update: {
            args: Prisma.user_typeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>
          }
          deleteMany: {
            args: Prisma.user_typeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_typeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_typeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>[]
          }
          upsert: {
            args: Prisma.user_typeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_typePayload>
          }
          aggregate: {
            args: Prisma.User_typeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_type>
          }
          groupBy: {
            args: Prisma.user_typeGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_typeGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_typeCountArgs<ExtArgs>
            result: $Utils.Optional<User_typeCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    item?: itemOmit
    itemtransaction?: itemtransactionOmit
    librarian?: librarianOmit
    patron?: patronOmit
    user_type?: user_typeOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    itemtransaction: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemtransaction?: boolean | ItemCountOutputTypeCountItemtransactionArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountItemtransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemtransactionWhereInput
  }


  /**
   * Count Type PatronCountOutputType
   */

  export type PatronCountOutputType = {
    itemtransaction: number
  }

  export type PatronCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemtransaction?: boolean | PatronCountOutputTypeCountItemtransactionArgs
  }

  // Custom InputTypes
  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatronCountOutputType
     */
    select?: PatronCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatronCountOutputType without action
   */
  export type PatronCountOutputTypeCountItemtransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemtransactionWhereInput
  }


  /**
   * Count Type User_typeCountOutputType
   */

  export type User_typeCountOutputType = {
    users: number
  }

  export type User_typeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | User_typeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * User_typeCountOutputType without action
   */
  export type User_typeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User_typeCountOutputType
     */
    select?: User_typeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * User_typeCountOutputType without action
   */
  export type User_typeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    librarian: number
    patron: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    librarian?: boolean | UsersCountOutputTypeCountLibrarianArgs
    patron?: boolean | UsersCountOutputTypeCountPatronArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLibrarianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: librarianWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPatronArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patronWhereInput
  }


  /**
   * Models
   */

  /**
   * Model item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    ItemID: number | null
    ItemPrice: Decimal | null
  }

  export type ItemSumAggregateOutputType = {
    ItemID: number | null
    ItemPrice: Decimal | null
  }

  export type ItemMinAggregateOutputType = {
    ItemID: number | null
    ItemTitle: string | null
    ItemAuthor: string | null
    ItemType: string | null
    ItemPrice: Decimal | null
    ItemImage: string | null
  }

  export type ItemMaxAggregateOutputType = {
    ItemID: number | null
    ItemTitle: string | null
    ItemAuthor: string | null
    ItemType: string | null
    ItemPrice: Decimal | null
    ItemImage: string | null
  }

  export type ItemCountAggregateOutputType = {
    ItemID: number
    ItemTitle: number
    ItemAuthor: number
    ItemType: number
    ItemPrice: number
    ItemImage: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    ItemID?: true
    ItemPrice?: true
  }

  export type ItemSumAggregateInputType = {
    ItemID?: true
    ItemPrice?: true
  }

  export type ItemMinAggregateInputType = {
    ItemID?: true
    ItemTitle?: true
    ItemAuthor?: true
    ItemType?: true
    ItemPrice?: true
    ItemImage?: true
  }

  export type ItemMaxAggregateInputType = {
    ItemID?: true
    ItemTitle?: true
    ItemAuthor?: true
    ItemType?: true
    ItemPrice?: true
    ItemImage?: true
  }

  export type ItemCountAggregateInputType = {
    ItemID?: true
    ItemTitle?: true
    ItemAuthor?: true
    ItemType?: true
    ItemPrice?: true
    ItemImage?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which item to aggregate.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type itemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemWhereInput
    orderBy?: itemOrderByWithAggregationInput | itemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: itemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    ItemID: number
    ItemTitle: string
    ItemAuthor: string | null
    ItemType: string | null
    ItemPrice: Decimal | null
    ItemImage: string | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends itemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type itemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemID?: boolean
    ItemTitle?: boolean
    ItemAuthor?: boolean
    ItemType?: boolean
    ItemPrice?: boolean
    ItemImage?: boolean
    itemtransaction?: boolean | item$itemtransactionArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type itemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemID?: boolean
    ItemTitle?: boolean
    ItemAuthor?: boolean
    ItemType?: boolean
    ItemPrice?: boolean
    ItemImage?: boolean
  }, ExtArgs["result"]["item"]>

  export type itemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemID?: boolean
    ItemTitle?: boolean
    ItemAuthor?: boolean
    ItemType?: boolean
    ItemPrice?: boolean
    ItemImage?: boolean
  }, ExtArgs["result"]["item"]>

  export type itemSelectScalar = {
    ItemID?: boolean
    ItemTitle?: boolean
    ItemAuthor?: boolean
    ItemType?: boolean
    ItemPrice?: boolean
    ItemImage?: boolean
  }

  export type itemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ItemID" | "ItemTitle" | "ItemAuthor" | "ItemType" | "ItemPrice" | "ItemImage", ExtArgs["result"]["item"]>
  export type itemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemtransaction?: boolean | item$itemtransactionArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type itemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type itemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $itemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "item"
    objects: {
      itemtransaction: Prisma.$itemtransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ItemID: number
      ItemTitle: string
      ItemAuthor: string | null
      ItemType: string | null
      ItemPrice: Prisma.Decimal | null
      ItemImage: string | null
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type itemGetPayload<S extends boolean | null | undefined | itemDefaultArgs> = $Result.GetResult<Prisma.$itemPayload, S>

  type itemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface itemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['item'], meta: { name: 'item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {itemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemFindUniqueArgs>(args: SelectSubset<T, itemFindUniqueArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemFindUniqueOrThrowArgs>(args: SelectSubset<T, itemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemFindFirstArgs>(args?: SelectSubset<T, itemFindFirstArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemFindFirstOrThrowArgs>(args?: SelectSubset<T, itemFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `ItemID`
     * const itemWithItemIDOnly = await prisma.item.findMany({ select: { ItemID: true } })
     * 
     */
    findMany<T extends itemFindManyArgs>(args?: SelectSubset<T, itemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {itemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends itemCreateArgs>(args: SelectSubset<T, itemCreateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {itemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemCreateManyArgs>(args?: SelectSubset<T, itemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {itemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `ItemID`
     * const itemWithItemIDOnly = await prisma.item.createManyAndReturn({
     *   select: { ItemID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itemCreateManyAndReturnArgs>(args?: SelectSubset<T, itemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {itemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends itemDeleteArgs>(args: SelectSubset<T, itemDeleteArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {itemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemUpdateArgs>(args: SelectSubset<T, itemUpdateArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {itemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemDeleteManyArgs>(args?: SelectSubset<T, itemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemUpdateManyArgs>(args: SelectSubset<T, itemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {itemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `ItemID`
     * const itemWithItemIDOnly = await prisma.item.updateManyAndReturn({
     *   select: { ItemID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends itemUpdateManyAndReturnArgs>(args: SelectSubset<T, itemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {itemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends itemUpsertArgs>(args: SelectSubset<T, itemUpsertArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends itemCountArgs>(
      args?: Subset<T, itemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemGroupByArgs['orderBy'] }
        : { orderBy?: itemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the item model
   */
  readonly fields: itemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemtransaction<T extends item$itemtransactionArgs<ExtArgs> = {}>(args?: Subset<T, item$itemtransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the item model
   */
  interface itemFieldRefs {
    readonly ItemID: FieldRef<"item", 'Int'>
    readonly ItemTitle: FieldRef<"item", 'String'>
    readonly ItemAuthor: FieldRef<"item", 'String'>
    readonly ItemType: FieldRef<"item", 'String'>
    readonly ItemPrice: FieldRef<"item", 'Decimal'>
    readonly ItemImage: FieldRef<"item", 'String'>
  }
    

  // Custom InputTypes
  /**
   * item findUnique
   */
  export type itemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findUniqueOrThrow
   */
  export type itemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item findFirst
   */
  export type itemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findFirstOrThrow
   */
  export type itemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which item to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item findMany
   */
  export type itemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter, which items to fetch.
     */
    where?: itemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of items to fetch.
     */
    orderBy?: itemOrderByWithRelationInput | itemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing items.
     */
    cursor?: itemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * item create
   */
  export type itemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to create a item.
     */
    data: XOR<itemCreateInput, itemUncheckedCreateInput>
  }

  /**
   * item createMany
   */
  export type itemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item createManyAndReturn
   */
  export type itemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * The data used to create many items.
     */
    data: itemCreateManyInput | itemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * item update
   */
  export type itemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The data needed to update a item.
     */
    data: XOR<itemUpdateInput, itemUncheckedUpdateInput>
    /**
     * Choose, which item to update.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item updateMany
   */
  export type itemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * item updateManyAndReturn
   */
  export type itemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * The data used to update items.
     */
    data: XOR<itemUpdateManyMutationInput, itemUncheckedUpdateManyInput>
    /**
     * Filter which items to update
     */
    where?: itemWhereInput
    /**
     * Limit how many items to update.
     */
    limit?: number
  }

  /**
   * item upsert
   */
  export type itemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * The filter to search for the item to update in case it exists.
     */
    where: itemWhereUniqueInput
    /**
     * In case the item found by the `where` argument doesn't exist, create a new item with this data.
     */
    create: XOR<itemCreateInput, itemUncheckedCreateInput>
    /**
     * In case the item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemUpdateInput, itemUncheckedUpdateInput>
  }

  /**
   * item delete
   */
  export type itemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
    /**
     * Filter which item to delete.
     */
    where: itemWhereUniqueInput
  }

  /**
   * item deleteMany
   */
  export type itemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which items to delete
     */
    where?: itemWhereInput
    /**
     * Limit how many items to delete.
     */
    limit?: number
  }

  /**
   * item.itemtransaction
   */
  export type item$itemtransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    where?: itemtransactionWhereInput
    orderBy?: itemtransactionOrderByWithRelationInput | itemtransactionOrderByWithRelationInput[]
    cursor?: itemtransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemtransactionScalarFieldEnum | ItemtransactionScalarFieldEnum[]
  }

  /**
   * item without action
   */
  export type itemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the item
     */
    select?: itemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the item
     */
    omit?: itemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemInclude<ExtArgs> | null
  }


  /**
   * Model itemtransaction
   */

  export type AggregateItemtransaction = {
    _count: ItemtransactionCountAggregateOutputType | null
    _avg: ItemtransactionAvgAggregateOutputType | null
    _sum: ItemtransactionSumAggregateOutputType | null
    _min: ItemtransactionMinAggregateOutputType | null
    _max: ItemtransactionMaxAggregateOutputType | null
  }

  export type ItemtransactionAvgAggregateOutputType = {
    ItemTranID: number | null
    ItemID: number | null
    ItemAssignedTo: number | null
  }

  export type ItemtransactionSumAggregateOutputType = {
    ItemTranID: number | null
    ItemID: number | null
    ItemAssignedTo: number | null
  }

  export type ItemtransactionMinAggregateOutputType = {
    ItemTranID: number | null
    ItemID: number | null
    IsAvailable: boolean | null
    ItemAssignedTo: number | null
    IsVisible: boolean | null
  }

  export type ItemtransactionMaxAggregateOutputType = {
    ItemTranID: number | null
    ItemID: number | null
    IsAvailable: boolean | null
    ItemAssignedTo: number | null
    IsVisible: boolean | null
  }

  export type ItemtransactionCountAggregateOutputType = {
    ItemTranID: number
    ItemID: number
    IsAvailable: number
    ItemAssignedTo: number
    IsVisible: number
    _all: number
  }


  export type ItemtransactionAvgAggregateInputType = {
    ItemTranID?: true
    ItemID?: true
    ItemAssignedTo?: true
  }

  export type ItemtransactionSumAggregateInputType = {
    ItemTranID?: true
    ItemID?: true
    ItemAssignedTo?: true
  }

  export type ItemtransactionMinAggregateInputType = {
    ItemTranID?: true
    ItemID?: true
    IsAvailable?: true
    ItemAssignedTo?: true
    IsVisible?: true
  }

  export type ItemtransactionMaxAggregateInputType = {
    ItemTranID?: true
    ItemID?: true
    IsAvailable?: true
    ItemAssignedTo?: true
    IsVisible?: true
  }

  export type ItemtransactionCountAggregateInputType = {
    ItemTranID?: true
    ItemID?: true
    IsAvailable?: true
    ItemAssignedTo?: true
    IsVisible?: true
    _all?: true
  }

  export type ItemtransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itemtransaction to aggregate.
     */
    where?: itemtransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemtransactions to fetch.
     */
    orderBy?: itemtransactionOrderByWithRelationInput | itemtransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: itemtransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemtransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemtransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned itemtransactions
    **/
    _count?: true | ItemtransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemtransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemtransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemtransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemtransactionMaxAggregateInputType
  }

  export type GetItemtransactionAggregateType<T extends ItemtransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateItemtransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemtransaction[P]>
      : GetScalarType<T[P], AggregateItemtransaction[P]>
  }




  export type itemtransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: itemtransactionWhereInput
    orderBy?: itemtransactionOrderByWithAggregationInput | itemtransactionOrderByWithAggregationInput[]
    by: ItemtransactionScalarFieldEnum[] | ItemtransactionScalarFieldEnum
    having?: itemtransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemtransactionCountAggregateInputType | true
    _avg?: ItemtransactionAvgAggregateInputType
    _sum?: ItemtransactionSumAggregateInputType
    _min?: ItemtransactionMinAggregateInputType
    _max?: ItemtransactionMaxAggregateInputType
  }

  export type ItemtransactionGroupByOutputType = {
    ItemTranID: number
    ItemID: number
    IsAvailable: boolean | null
    ItemAssignedTo: number | null
    IsVisible: boolean | null
    _count: ItemtransactionCountAggregateOutputType | null
    _avg: ItemtransactionAvgAggregateOutputType | null
    _sum: ItemtransactionSumAggregateOutputType | null
    _min: ItemtransactionMinAggregateOutputType | null
    _max: ItemtransactionMaxAggregateOutputType | null
  }

  type GetItemtransactionGroupByPayload<T extends itemtransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemtransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemtransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemtransactionGroupByOutputType[P]>
            : GetScalarType<T[P], ItemtransactionGroupByOutputType[P]>
        }
      >
    >


  export type itemtransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemTranID?: boolean
    ItemID?: boolean
    IsAvailable?: boolean
    ItemAssignedTo?: boolean
    IsVisible?: boolean
    patron?: boolean | itemtransaction$patronArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemtransaction"]>

  export type itemtransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemTranID?: boolean
    ItemID?: boolean
    IsAvailable?: boolean
    ItemAssignedTo?: boolean
    IsVisible?: boolean
    patron?: boolean | itemtransaction$patronArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemtransaction"]>

  export type itemtransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ItemTranID?: boolean
    ItemID?: boolean
    IsAvailable?: boolean
    ItemAssignedTo?: boolean
    IsVisible?: boolean
    patron?: boolean | itemtransaction$patronArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemtransaction"]>

  export type itemtransactionSelectScalar = {
    ItemTranID?: boolean
    ItemID?: boolean
    IsAvailable?: boolean
    ItemAssignedTo?: boolean
    IsVisible?: boolean
  }

  export type itemtransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ItemTranID" | "ItemID" | "IsAvailable" | "ItemAssignedTo" | "IsVisible", ExtArgs["result"]["itemtransaction"]>
  export type itemtransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patron?: boolean | itemtransaction$patronArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }
  export type itemtransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patron?: boolean | itemtransaction$patronArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }
  export type itemtransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patron?: boolean | itemtransaction$patronArgs<ExtArgs>
    item?: boolean | itemDefaultArgs<ExtArgs>
  }

  export type $itemtransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "itemtransaction"
    objects: {
      patron: Prisma.$patronPayload<ExtArgs> | null
      item: Prisma.$itemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ItemTranID: number
      ItemID: number
      IsAvailable: boolean | null
      ItemAssignedTo: number | null
      IsVisible: boolean | null
    }, ExtArgs["result"]["itemtransaction"]>
    composites: {}
  }

  type itemtransactionGetPayload<S extends boolean | null | undefined | itemtransactionDefaultArgs> = $Result.GetResult<Prisma.$itemtransactionPayload, S>

  type itemtransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<itemtransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemtransactionCountAggregateInputType | true
    }

  export interface itemtransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['itemtransaction'], meta: { name: 'itemtransaction' } }
    /**
     * Find zero or one Itemtransaction that matches the filter.
     * @param {itemtransactionFindUniqueArgs} args - Arguments to find a Itemtransaction
     * @example
     * // Get one Itemtransaction
     * const itemtransaction = await prisma.itemtransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends itemtransactionFindUniqueArgs>(args: SelectSubset<T, itemtransactionFindUniqueArgs<ExtArgs>>): Prisma__itemtransactionClient<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Itemtransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {itemtransactionFindUniqueOrThrowArgs} args - Arguments to find a Itemtransaction
     * @example
     * // Get one Itemtransaction
     * const itemtransaction = await prisma.itemtransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends itemtransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, itemtransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__itemtransactionClient<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itemtransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemtransactionFindFirstArgs} args - Arguments to find a Itemtransaction
     * @example
     * // Get one Itemtransaction
     * const itemtransaction = await prisma.itemtransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends itemtransactionFindFirstArgs>(args?: SelectSubset<T, itemtransactionFindFirstArgs<ExtArgs>>): Prisma__itemtransactionClient<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Itemtransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemtransactionFindFirstOrThrowArgs} args - Arguments to find a Itemtransaction
     * @example
     * // Get one Itemtransaction
     * const itemtransaction = await prisma.itemtransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends itemtransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, itemtransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__itemtransactionClient<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Itemtransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemtransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Itemtransactions
     * const itemtransactions = await prisma.itemtransaction.findMany()
     * 
     * // Get first 10 Itemtransactions
     * const itemtransactions = await prisma.itemtransaction.findMany({ take: 10 })
     * 
     * // Only select the `ItemTranID`
     * const itemtransactionWithItemTranIDOnly = await prisma.itemtransaction.findMany({ select: { ItemTranID: true } })
     * 
     */
    findMany<T extends itemtransactionFindManyArgs>(args?: SelectSubset<T, itemtransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Itemtransaction.
     * @param {itemtransactionCreateArgs} args - Arguments to create a Itemtransaction.
     * @example
     * // Create one Itemtransaction
     * const Itemtransaction = await prisma.itemtransaction.create({
     *   data: {
     *     // ... data to create a Itemtransaction
     *   }
     * })
     * 
     */
    create<T extends itemtransactionCreateArgs>(args: SelectSubset<T, itemtransactionCreateArgs<ExtArgs>>): Prisma__itemtransactionClient<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Itemtransactions.
     * @param {itemtransactionCreateManyArgs} args - Arguments to create many Itemtransactions.
     * @example
     * // Create many Itemtransactions
     * const itemtransaction = await prisma.itemtransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends itemtransactionCreateManyArgs>(args?: SelectSubset<T, itemtransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Itemtransactions and returns the data saved in the database.
     * @param {itemtransactionCreateManyAndReturnArgs} args - Arguments to create many Itemtransactions.
     * @example
     * // Create many Itemtransactions
     * const itemtransaction = await prisma.itemtransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Itemtransactions and only return the `ItemTranID`
     * const itemtransactionWithItemTranIDOnly = await prisma.itemtransaction.createManyAndReturn({
     *   select: { ItemTranID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends itemtransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, itemtransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Itemtransaction.
     * @param {itemtransactionDeleteArgs} args - Arguments to delete one Itemtransaction.
     * @example
     * // Delete one Itemtransaction
     * const Itemtransaction = await prisma.itemtransaction.delete({
     *   where: {
     *     // ... filter to delete one Itemtransaction
     *   }
     * })
     * 
     */
    delete<T extends itemtransactionDeleteArgs>(args: SelectSubset<T, itemtransactionDeleteArgs<ExtArgs>>): Prisma__itemtransactionClient<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Itemtransaction.
     * @param {itemtransactionUpdateArgs} args - Arguments to update one Itemtransaction.
     * @example
     * // Update one Itemtransaction
     * const itemtransaction = await prisma.itemtransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends itemtransactionUpdateArgs>(args: SelectSubset<T, itemtransactionUpdateArgs<ExtArgs>>): Prisma__itemtransactionClient<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Itemtransactions.
     * @param {itemtransactionDeleteManyArgs} args - Arguments to filter Itemtransactions to delete.
     * @example
     * // Delete a few Itemtransactions
     * const { count } = await prisma.itemtransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends itemtransactionDeleteManyArgs>(args?: SelectSubset<T, itemtransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itemtransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemtransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Itemtransactions
     * const itemtransaction = await prisma.itemtransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends itemtransactionUpdateManyArgs>(args: SelectSubset<T, itemtransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Itemtransactions and returns the data updated in the database.
     * @param {itemtransactionUpdateManyAndReturnArgs} args - Arguments to update many Itemtransactions.
     * @example
     * // Update many Itemtransactions
     * const itemtransaction = await prisma.itemtransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Itemtransactions and only return the `ItemTranID`
     * const itemtransactionWithItemTranIDOnly = await prisma.itemtransaction.updateManyAndReturn({
     *   select: { ItemTranID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends itemtransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, itemtransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Itemtransaction.
     * @param {itemtransactionUpsertArgs} args - Arguments to update or create a Itemtransaction.
     * @example
     * // Update or create a Itemtransaction
     * const itemtransaction = await prisma.itemtransaction.upsert({
     *   create: {
     *     // ... data to create a Itemtransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Itemtransaction we want to update
     *   }
     * })
     */
    upsert<T extends itemtransactionUpsertArgs>(args: SelectSubset<T, itemtransactionUpsertArgs<ExtArgs>>): Prisma__itemtransactionClient<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Itemtransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemtransactionCountArgs} args - Arguments to filter Itemtransactions to count.
     * @example
     * // Count the number of Itemtransactions
     * const count = await prisma.itemtransaction.count({
     *   where: {
     *     // ... the filter for the Itemtransactions we want to count
     *   }
     * })
    **/
    count<T extends itemtransactionCountArgs>(
      args?: Subset<T, itemtransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemtransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Itemtransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemtransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemtransactionAggregateArgs>(args: Subset<T, ItemtransactionAggregateArgs>): Prisma.PrismaPromise<GetItemtransactionAggregateType<T>>

    /**
     * Group by Itemtransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {itemtransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends itemtransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: itemtransactionGroupByArgs['orderBy'] }
        : { orderBy?: itemtransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, itemtransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemtransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the itemtransaction model
   */
  readonly fields: itemtransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for itemtransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__itemtransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patron<T extends itemtransaction$patronArgs<ExtArgs> = {}>(args?: Subset<T, itemtransaction$patronArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    item<T extends itemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, itemDefaultArgs<ExtArgs>>): Prisma__itemClient<$Result.GetResult<Prisma.$itemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the itemtransaction model
   */
  interface itemtransactionFieldRefs {
    readonly ItemTranID: FieldRef<"itemtransaction", 'Int'>
    readonly ItemID: FieldRef<"itemtransaction", 'Int'>
    readonly IsAvailable: FieldRef<"itemtransaction", 'Boolean'>
    readonly ItemAssignedTo: FieldRef<"itemtransaction", 'Int'>
    readonly IsVisible: FieldRef<"itemtransaction", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * itemtransaction findUnique
   */
  export type itemtransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * Filter, which itemtransaction to fetch.
     */
    where: itemtransactionWhereUniqueInput
  }

  /**
   * itemtransaction findUniqueOrThrow
   */
  export type itemtransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * Filter, which itemtransaction to fetch.
     */
    where: itemtransactionWhereUniqueInput
  }

  /**
   * itemtransaction findFirst
   */
  export type itemtransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * Filter, which itemtransaction to fetch.
     */
    where?: itemtransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemtransactions to fetch.
     */
    orderBy?: itemtransactionOrderByWithRelationInput | itemtransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemtransactions.
     */
    cursor?: itemtransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemtransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemtransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemtransactions.
     */
    distinct?: ItemtransactionScalarFieldEnum | ItemtransactionScalarFieldEnum[]
  }

  /**
   * itemtransaction findFirstOrThrow
   */
  export type itemtransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * Filter, which itemtransaction to fetch.
     */
    where?: itemtransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemtransactions to fetch.
     */
    orderBy?: itemtransactionOrderByWithRelationInput | itemtransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for itemtransactions.
     */
    cursor?: itemtransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemtransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemtransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of itemtransactions.
     */
    distinct?: ItemtransactionScalarFieldEnum | ItemtransactionScalarFieldEnum[]
  }

  /**
   * itemtransaction findMany
   */
  export type itemtransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * Filter, which itemtransactions to fetch.
     */
    where?: itemtransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of itemtransactions to fetch.
     */
    orderBy?: itemtransactionOrderByWithRelationInput | itemtransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing itemtransactions.
     */
    cursor?: itemtransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` itemtransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` itemtransactions.
     */
    skip?: number
    distinct?: ItemtransactionScalarFieldEnum | ItemtransactionScalarFieldEnum[]
  }

  /**
   * itemtransaction create
   */
  export type itemtransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a itemtransaction.
     */
    data: XOR<itemtransactionCreateInput, itemtransactionUncheckedCreateInput>
  }

  /**
   * itemtransaction createMany
   */
  export type itemtransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many itemtransactions.
     */
    data: itemtransactionCreateManyInput | itemtransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * itemtransaction createManyAndReturn
   */
  export type itemtransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * The data used to create many itemtransactions.
     */
    data: itemtransactionCreateManyInput | itemtransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * itemtransaction update
   */
  export type itemtransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a itemtransaction.
     */
    data: XOR<itemtransactionUpdateInput, itemtransactionUncheckedUpdateInput>
    /**
     * Choose, which itemtransaction to update.
     */
    where: itemtransactionWhereUniqueInput
  }

  /**
   * itemtransaction updateMany
   */
  export type itemtransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update itemtransactions.
     */
    data: XOR<itemtransactionUpdateManyMutationInput, itemtransactionUncheckedUpdateManyInput>
    /**
     * Filter which itemtransactions to update
     */
    where?: itemtransactionWhereInput
    /**
     * Limit how many itemtransactions to update.
     */
    limit?: number
  }

  /**
   * itemtransaction updateManyAndReturn
   */
  export type itemtransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * The data used to update itemtransactions.
     */
    data: XOR<itemtransactionUpdateManyMutationInput, itemtransactionUncheckedUpdateManyInput>
    /**
     * Filter which itemtransactions to update
     */
    where?: itemtransactionWhereInput
    /**
     * Limit how many itemtransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * itemtransaction upsert
   */
  export type itemtransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the itemtransaction to update in case it exists.
     */
    where: itemtransactionWhereUniqueInput
    /**
     * In case the itemtransaction found by the `where` argument doesn't exist, create a new itemtransaction with this data.
     */
    create: XOR<itemtransactionCreateInput, itemtransactionUncheckedCreateInput>
    /**
     * In case the itemtransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<itemtransactionUpdateInput, itemtransactionUncheckedUpdateInput>
  }

  /**
   * itemtransaction delete
   */
  export type itemtransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    /**
     * Filter which itemtransaction to delete.
     */
    where: itemtransactionWhereUniqueInput
  }

  /**
   * itemtransaction deleteMany
   */
  export type itemtransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which itemtransactions to delete
     */
    where?: itemtransactionWhereInput
    /**
     * Limit how many itemtransactions to delete.
     */
    limit?: number
  }

  /**
   * itemtransaction.patron
   */
  export type itemtransaction$patronArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    where?: patronWhereInput
  }

  /**
   * itemtransaction without action
   */
  export type itemtransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
  }


  /**
   * Model librarian
   */

  export type AggregateLibrarian = {
    _count: LibrarianCountAggregateOutputType | null
    _avg: LibrarianAvgAggregateOutputType | null
    _sum: LibrarianSumAggregateOutputType | null
    _min: LibrarianMinAggregateOutputType | null
    _max: LibrarianMaxAggregateOutputType | null
  }

  export type LibrarianAvgAggregateOutputType = {
    LibrarianID: number | null
    UserID: number | null
  }

  export type LibrarianSumAggregateOutputType = {
    LibrarianID: number | null
    UserID: number | null
  }

  export type LibrarianMinAggregateOutputType = {
    LibrarianID: number | null
    LibrarianName: string | null
    UserID: number | null
  }

  export type LibrarianMaxAggregateOutputType = {
    LibrarianID: number | null
    LibrarianName: string | null
    UserID: number | null
  }

  export type LibrarianCountAggregateOutputType = {
    LibrarianID: number
    LibrarianName: number
    UserID: number
    _all: number
  }


  export type LibrarianAvgAggregateInputType = {
    LibrarianID?: true
    UserID?: true
  }

  export type LibrarianSumAggregateInputType = {
    LibrarianID?: true
    UserID?: true
  }

  export type LibrarianMinAggregateInputType = {
    LibrarianID?: true
    LibrarianName?: true
    UserID?: true
  }

  export type LibrarianMaxAggregateInputType = {
    LibrarianID?: true
    LibrarianName?: true
    UserID?: true
  }

  export type LibrarianCountAggregateInputType = {
    LibrarianID?: true
    LibrarianName?: true
    UserID?: true
    _all?: true
  }

  export type LibrarianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which librarian to aggregate.
     */
    where?: librarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of librarians to fetch.
     */
    orderBy?: librarianOrderByWithRelationInput | librarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: librarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` librarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` librarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned librarians
    **/
    _count?: true | LibrarianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibrarianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrarianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibrarianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibrarianMaxAggregateInputType
  }

  export type GetLibrarianAggregateType<T extends LibrarianAggregateArgs> = {
        [P in keyof T & keyof AggregateLibrarian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibrarian[P]>
      : GetScalarType<T[P], AggregateLibrarian[P]>
  }




  export type librarianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: librarianWhereInput
    orderBy?: librarianOrderByWithAggregationInput | librarianOrderByWithAggregationInput[]
    by: LibrarianScalarFieldEnum[] | LibrarianScalarFieldEnum
    having?: librarianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibrarianCountAggregateInputType | true
    _avg?: LibrarianAvgAggregateInputType
    _sum?: LibrarianSumAggregateInputType
    _min?: LibrarianMinAggregateInputType
    _max?: LibrarianMaxAggregateInputType
  }

  export type LibrarianGroupByOutputType = {
    LibrarianID: number
    LibrarianName: string
    UserID: number | null
    _count: LibrarianCountAggregateOutputType | null
    _avg: LibrarianAvgAggregateOutputType | null
    _sum: LibrarianSumAggregateOutputType | null
    _min: LibrarianMinAggregateOutputType | null
    _max: LibrarianMaxAggregateOutputType | null
  }

  type GetLibrarianGroupByPayload<T extends librarianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibrarianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibrarianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibrarianGroupByOutputType[P]>
            : GetScalarType<T[P], LibrarianGroupByOutputType[P]>
        }
      >
    >


  export type librarianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LibrarianID?: boolean
    LibrarianName?: boolean
    UserID?: boolean
    users?: boolean | librarian$usersArgs<ExtArgs>
  }, ExtArgs["result"]["librarian"]>

  export type librarianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LibrarianID?: boolean
    LibrarianName?: boolean
    UserID?: boolean
    users?: boolean | librarian$usersArgs<ExtArgs>
  }, ExtArgs["result"]["librarian"]>

  export type librarianSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LibrarianID?: boolean
    LibrarianName?: boolean
    UserID?: boolean
    users?: boolean | librarian$usersArgs<ExtArgs>
  }, ExtArgs["result"]["librarian"]>

  export type librarianSelectScalar = {
    LibrarianID?: boolean
    LibrarianName?: boolean
    UserID?: boolean
  }

  export type librarianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"LibrarianID" | "LibrarianName" | "UserID", ExtArgs["result"]["librarian"]>
  export type librarianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | librarian$usersArgs<ExtArgs>
  }
  export type librarianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | librarian$usersArgs<ExtArgs>
  }
  export type librarianIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | librarian$usersArgs<ExtArgs>
  }

  export type $librarianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "librarian"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      LibrarianID: number
      LibrarianName: string
      UserID: number | null
    }, ExtArgs["result"]["librarian"]>
    composites: {}
  }

  type librarianGetPayload<S extends boolean | null | undefined | librarianDefaultArgs> = $Result.GetResult<Prisma.$librarianPayload, S>

  type librarianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<librarianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibrarianCountAggregateInputType | true
    }

  export interface librarianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['librarian'], meta: { name: 'librarian' } }
    /**
     * Find zero or one Librarian that matches the filter.
     * @param {librarianFindUniqueArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends librarianFindUniqueArgs>(args: SelectSubset<T, librarianFindUniqueArgs<ExtArgs>>): Prisma__librarianClient<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Librarian that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {librarianFindUniqueOrThrowArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends librarianFindUniqueOrThrowArgs>(args: SelectSubset<T, librarianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__librarianClient<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Librarian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librarianFindFirstArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends librarianFindFirstArgs>(args?: SelectSubset<T, librarianFindFirstArgs<ExtArgs>>): Prisma__librarianClient<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Librarian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librarianFindFirstOrThrowArgs} args - Arguments to find a Librarian
     * @example
     * // Get one Librarian
     * const librarian = await prisma.librarian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends librarianFindFirstOrThrowArgs>(args?: SelectSubset<T, librarianFindFirstOrThrowArgs<ExtArgs>>): Prisma__librarianClient<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Librarians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librarianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Librarians
     * const librarians = await prisma.librarian.findMany()
     * 
     * // Get first 10 Librarians
     * const librarians = await prisma.librarian.findMany({ take: 10 })
     * 
     * // Only select the `LibrarianID`
     * const librarianWithLibrarianIDOnly = await prisma.librarian.findMany({ select: { LibrarianID: true } })
     * 
     */
    findMany<T extends librarianFindManyArgs>(args?: SelectSubset<T, librarianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Librarian.
     * @param {librarianCreateArgs} args - Arguments to create a Librarian.
     * @example
     * // Create one Librarian
     * const Librarian = await prisma.librarian.create({
     *   data: {
     *     // ... data to create a Librarian
     *   }
     * })
     * 
     */
    create<T extends librarianCreateArgs>(args: SelectSubset<T, librarianCreateArgs<ExtArgs>>): Prisma__librarianClient<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Librarians.
     * @param {librarianCreateManyArgs} args - Arguments to create many Librarians.
     * @example
     * // Create many Librarians
     * const librarian = await prisma.librarian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends librarianCreateManyArgs>(args?: SelectSubset<T, librarianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Librarians and returns the data saved in the database.
     * @param {librarianCreateManyAndReturnArgs} args - Arguments to create many Librarians.
     * @example
     * // Create many Librarians
     * const librarian = await prisma.librarian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Librarians and only return the `LibrarianID`
     * const librarianWithLibrarianIDOnly = await prisma.librarian.createManyAndReturn({
     *   select: { LibrarianID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends librarianCreateManyAndReturnArgs>(args?: SelectSubset<T, librarianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Librarian.
     * @param {librarianDeleteArgs} args - Arguments to delete one Librarian.
     * @example
     * // Delete one Librarian
     * const Librarian = await prisma.librarian.delete({
     *   where: {
     *     // ... filter to delete one Librarian
     *   }
     * })
     * 
     */
    delete<T extends librarianDeleteArgs>(args: SelectSubset<T, librarianDeleteArgs<ExtArgs>>): Prisma__librarianClient<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Librarian.
     * @param {librarianUpdateArgs} args - Arguments to update one Librarian.
     * @example
     * // Update one Librarian
     * const librarian = await prisma.librarian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends librarianUpdateArgs>(args: SelectSubset<T, librarianUpdateArgs<ExtArgs>>): Prisma__librarianClient<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Librarians.
     * @param {librarianDeleteManyArgs} args - Arguments to filter Librarians to delete.
     * @example
     * // Delete a few Librarians
     * const { count } = await prisma.librarian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends librarianDeleteManyArgs>(args?: SelectSubset<T, librarianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Librarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librarianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Librarians
     * const librarian = await prisma.librarian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends librarianUpdateManyArgs>(args: SelectSubset<T, librarianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Librarians and returns the data updated in the database.
     * @param {librarianUpdateManyAndReturnArgs} args - Arguments to update many Librarians.
     * @example
     * // Update many Librarians
     * const librarian = await prisma.librarian.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Librarians and only return the `LibrarianID`
     * const librarianWithLibrarianIDOnly = await prisma.librarian.updateManyAndReturn({
     *   select: { LibrarianID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends librarianUpdateManyAndReturnArgs>(args: SelectSubset<T, librarianUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Librarian.
     * @param {librarianUpsertArgs} args - Arguments to update or create a Librarian.
     * @example
     * // Update or create a Librarian
     * const librarian = await prisma.librarian.upsert({
     *   create: {
     *     // ... data to create a Librarian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Librarian we want to update
     *   }
     * })
     */
    upsert<T extends librarianUpsertArgs>(args: SelectSubset<T, librarianUpsertArgs<ExtArgs>>): Prisma__librarianClient<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Librarians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librarianCountArgs} args - Arguments to filter Librarians to count.
     * @example
     * // Count the number of Librarians
     * const count = await prisma.librarian.count({
     *   where: {
     *     // ... the filter for the Librarians we want to count
     *   }
     * })
    **/
    count<T extends librarianCountArgs>(
      args?: Subset<T, librarianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibrarianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Librarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrarianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibrarianAggregateArgs>(args: Subset<T, LibrarianAggregateArgs>): Prisma.PrismaPromise<GetLibrarianAggregateType<T>>

    /**
     * Group by Librarian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {librarianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends librarianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: librarianGroupByArgs['orderBy'] }
        : { orderBy?: librarianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, librarianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibrarianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the librarian model
   */
  readonly fields: librarianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for librarian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__librarianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends librarian$usersArgs<ExtArgs> = {}>(args?: Subset<T, librarian$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the librarian model
   */
  interface librarianFieldRefs {
    readonly LibrarianID: FieldRef<"librarian", 'Int'>
    readonly LibrarianName: FieldRef<"librarian", 'String'>
    readonly UserID: FieldRef<"librarian", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * librarian findUnique
   */
  export type librarianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * Filter, which librarian to fetch.
     */
    where: librarianWhereUniqueInput
  }

  /**
   * librarian findUniqueOrThrow
   */
  export type librarianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * Filter, which librarian to fetch.
     */
    where: librarianWhereUniqueInput
  }

  /**
   * librarian findFirst
   */
  export type librarianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * Filter, which librarian to fetch.
     */
    where?: librarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of librarians to fetch.
     */
    orderBy?: librarianOrderByWithRelationInput | librarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for librarians.
     */
    cursor?: librarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` librarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` librarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of librarians.
     */
    distinct?: LibrarianScalarFieldEnum | LibrarianScalarFieldEnum[]
  }

  /**
   * librarian findFirstOrThrow
   */
  export type librarianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * Filter, which librarian to fetch.
     */
    where?: librarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of librarians to fetch.
     */
    orderBy?: librarianOrderByWithRelationInput | librarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for librarians.
     */
    cursor?: librarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` librarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` librarians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of librarians.
     */
    distinct?: LibrarianScalarFieldEnum | LibrarianScalarFieldEnum[]
  }

  /**
   * librarian findMany
   */
  export type librarianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * Filter, which librarians to fetch.
     */
    where?: librarianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of librarians to fetch.
     */
    orderBy?: librarianOrderByWithRelationInput | librarianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing librarians.
     */
    cursor?: librarianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` librarians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` librarians.
     */
    skip?: number
    distinct?: LibrarianScalarFieldEnum | LibrarianScalarFieldEnum[]
  }

  /**
   * librarian create
   */
  export type librarianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * The data needed to create a librarian.
     */
    data: XOR<librarianCreateInput, librarianUncheckedCreateInput>
  }

  /**
   * librarian createMany
   */
  export type librarianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many librarians.
     */
    data: librarianCreateManyInput | librarianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * librarian createManyAndReturn
   */
  export type librarianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * The data used to create many librarians.
     */
    data: librarianCreateManyInput | librarianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * librarian update
   */
  export type librarianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * The data needed to update a librarian.
     */
    data: XOR<librarianUpdateInput, librarianUncheckedUpdateInput>
    /**
     * Choose, which librarian to update.
     */
    where: librarianWhereUniqueInput
  }

  /**
   * librarian updateMany
   */
  export type librarianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update librarians.
     */
    data: XOR<librarianUpdateManyMutationInput, librarianUncheckedUpdateManyInput>
    /**
     * Filter which librarians to update
     */
    where?: librarianWhereInput
    /**
     * Limit how many librarians to update.
     */
    limit?: number
  }

  /**
   * librarian updateManyAndReturn
   */
  export type librarianUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * The data used to update librarians.
     */
    data: XOR<librarianUpdateManyMutationInput, librarianUncheckedUpdateManyInput>
    /**
     * Filter which librarians to update
     */
    where?: librarianWhereInput
    /**
     * Limit how many librarians to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * librarian upsert
   */
  export type librarianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * The filter to search for the librarian to update in case it exists.
     */
    where: librarianWhereUniqueInput
    /**
     * In case the librarian found by the `where` argument doesn't exist, create a new librarian with this data.
     */
    create: XOR<librarianCreateInput, librarianUncheckedCreateInput>
    /**
     * In case the librarian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<librarianUpdateInput, librarianUncheckedUpdateInput>
  }

  /**
   * librarian delete
   */
  export type librarianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    /**
     * Filter which librarian to delete.
     */
    where: librarianWhereUniqueInput
  }

  /**
   * librarian deleteMany
   */
  export type librarianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which librarians to delete
     */
    where?: librarianWhereInput
    /**
     * Limit how many librarians to delete.
     */
    limit?: number
  }

  /**
   * librarian.users
   */
  export type librarian$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * librarian without action
   */
  export type librarianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
  }


  /**
   * Model patron
   */

  export type AggregatePatron = {
    _count: PatronCountAggregateOutputType | null
    _avg: PatronAvgAggregateOutputType | null
    _sum: PatronSumAggregateOutputType | null
    _min: PatronMinAggregateOutputType | null
    _max: PatronMaxAggregateOutputType | null
  }

  export type PatronAvgAggregateOutputType = {
    PatronID: number | null
    UserID: number | null
  }

  export type PatronSumAggregateOutputType = {
    PatronID: number | null
    UserID: number | null
  }

  export type PatronMinAggregateOutputType = {
    PatronID: number | null
    PatronFirstName: string | null
    PatronMiddleName: string | null
    PatronLastName: string | null
    PatronDepartment: string | null
    PatronSemester: string | null
    PatronRollNo: string | null
    PatronEnrollmentNumber: string | null
    PatronImage: string | null
    UserID: number | null
  }

  export type PatronMaxAggregateOutputType = {
    PatronID: number | null
    PatronFirstName: string | null
    PatronMiddleName: string | null
    PatronLastName: string | null
    PatronDepartment: string | null
    PatronSemester: string | null
    PatronRollNo: string | null
    PatronEnrollmentNumber: string | null
    PatronImage: string | null
    UserID: number | null
  }

  export type PatronCountAggregateOutputType = {
    PatronID: number
    PatronFirstName: number
    PatronMiddleName: number
    PatronLastName: number
    PatronDepartment: number
    PatronSemester: number
    PatronRollNo: number
    PatronEnrollmentNumber: number
    PatronImage: number
    UserID: number
    _all: number
  }


  export type PatronAvgAggregateInputType = {
    PatronID?: true
    UserID?: true
  }

  export type PatronSumAggregateInputType = {
    PatronID?: true
    UserID?: true
  }

  export type PatronMinAggregateInputType = {
    PatronID?: true
    PatronFirstName?: true
    PatronMiddleName?: true
    PatronLastName?: true
    PatronDepartment?: true
    PatronSemester?: true
    PatronRollNo?: true
    PatronEnrollmentNumber?: true
    PatronImage?: true
    UserID?: true
  }

  export type PatronMaxAggregateInputType = {
    PatronID?: true
    PatronFirstName?: true
    PatronMiddleName?: true
    PatronLastName?: true
    PatronDepartment?: true
    PatronSemester?: true
    PatronRollNo?: true
    PatronEnrollmentNumber?: true
    PatronImage?: true
    UserID?: true
  }

  export type PatronCountAggregateInputType = {
    PatronID?: true
    PatronFirstName?: true
    PatronMiddleName?: true
    PatronLastName?: true
    PatronDepartment?: true
    PatronSemester?: true
    PatronRollNo?: true
    PatronEnrollmentNumber?: true
    PatronImage?: true
    UserID?: true
    _all?: true
  }

  export type PatronAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patron to aggregate.
     */
    where?: patronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patrons to fetch.
     */
    orderBy?: patronOrderByWithRelationInput | patronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: patronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patrons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patrons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned patrons
    **/
    _count?: true | PatronCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatronAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatronSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatronMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatronMaxAggregateInputType
  }

  export type GetPatronAggregateType<T extends PatronAggregateArgs> = {
        [P in keyof T & keyof AggregatePatron]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatron[P]>
      : GetScalarType<T[P], AggregatePatron[P]>
  }




  export type patronGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: patronWhereInput
    orderBy?: patronOrderByWithAggregationInput | patronOrderByWithAggregationInput[]
    by: PatronScalarFieldEnum[] | PatronScalarFieldEnum
    having?: patronScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatronCountAggregateInputType | true
    _avg?: PatronAvgAggregateInputType
    _sum?: PatronSumAggregateInputType
    _min?: PatronMinAggregateInputType
    _max?: PatronMaxAggregateInputType
  }

  export type PatronGroupByOutputType = {
    PatronID: number
    PatronFirstName: string
    PatronMiddleName: string | null
    PatronLastName: string
    PatronDepartment: string | null
    PatronSemester: string | null
    PatronRollNo: string | null
    PatronEnrollmentNumber: string | null
    PatronImage: string | null
    UserID: number | null
    _count: PatronCountAggregateOutputType | null
    _avg: PatronAvgAggregateOutputType | null
    _sum: PatronSumAggregateOutputType | null
    _min: PatronMinAggregateOutputType | null
    _max: PatronMaxAggregateOutputType | null
  }

  type GetPatronGroupByPayload<T extends patronGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatronGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatronGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatronGroupByOutputType[P]>
            : GetScalarType<T[P], PatronGroupByOutputType[P]>
        }
      >
    >


  export type patronSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PatronID?: boolean
    PatronFirstName?: boolean
    PatronMiddleName?: boolean
    PatronLastName?: boolean
    PatronDepartment?: boolean
    PatronSemester?: boolean
    PatronRollNo?: boolean
    PatronEnrollmentNumber?: boolean
    PatronImage?: boolean
    UserID?: boolean
    itemtransaction?: boolean | patron$itemtransactionArgs<ExtArgs>
    users?: boolean | patron$usersArgs<ExtArgs>
    _count?: boolean | PatronCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patron"]>

  export type patronSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PatronID?: boolean
    PatronFirstName?: boolean
    PatronMiddleName?: boolean
    PatronLastName?: boolean
    PatronDepartment?: boolean
    PatronSemester?: boolean
    PatronRollNo?: boolean
    PatronEnrollmentNumber?: boolean
    PatronImage?: boolean
    UserID?: boolean
    users?: boolean | patron$usersArgs<ExtArgs>
  }, ExtArgs["result"]["patron"]>

  export type patronSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PatronID?: boolean
    PatronFirstName?: boolean
    PatronMiddleName?: boolean
    PatronLastName?: boolean
    PatronDepartment?: boolean
    PatronSemester?: boolean
    PatronRollNo?: boolean
    PatronEnrollmentNumber?: boolean
    PatronImage?: boolean
    UserID?: boolean
    users?: boolean | patron$usersArgs<ExtArgs>
  }, ExtArgs["result"]["patron"]>

  export type patronSelectScalar = {
    PatronID?: boolean
    PatronFirstName?: boolean
    PatronMiddleName?: boolean
    PatronLastName?: boolean
    PatronDepartment?: boolean
    PatronSemester?: boolean
    PatronRollNo?: boolean
    PatronEnrollmentNumber?: boolean
    PatronImage?: boolean
    UserID?: boolean
  }

  export type patronOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"PatronID" | "PatronFirstName" | "PatronMiddleName" | "PatronLastName" | "PatronDepartment" | "PatronSemester" | "PatronRollNo" | "PatronEnrollmentNumber" | "PatronImage" | "UserID", ExtArgs["result"]["patron"]>
  export type patronInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    itemtransaction?: boolean | patron$itemtransactionArgs<ExtArgs>
    users?: boolean | patron$usersArgs<ExtArgs>
    _count?: boolean | PatronCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type patronIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | patron$usersArgs<ExtArgs>
  }
  export type patronIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | patron$usersArgs<ExtArgs>
  }

  export type $patronPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "patron"
    objects: {
      itemtransaction: Prisma.$itemtransactionPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      PatronID: number
      PatronFirstName: string
      PatronMiddleName: string | null
      PatronLastName: string
      PatronDepartment: string | null
      PatronSemester: string | null
      PatronRollNo: string | null
      PatronEnrollmentNumber: string | null
      PatronImage: string | null
      UserID: number | null
    }, ExtArgs["result"]["patron"]>
    composites: {}
  }

  type patronGetPayload<S extends boolean | null | undefined | patronDefaultArgs> = $Result.GetResult<Prisma.$patronPayload, S>

  type patronCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<patronFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatronCountAggregateInputType | true
    }

  export interface patronDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['patron'], meta: { name: 'patron' } }
    /**
     * Find zero or one Patron that matches the filter.
     * @param {patronFindUniqueArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends patronFindUniqueArgs>(args: SelectSubset<T, patronFindUniqueArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patron that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {patronFindUniqueOrThrowArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends patronFindUniqueOrThrowArgs>(args: SelectSubset<T, patronFindUniqueOrThrowArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patron that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patronFindFirstArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends patronFindFirstArgs>(args?: SelectSubset<T, patronFindFirstArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patron that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patronFindFirstOrThrowArgs} args - Arguments to find a Patron
     * @example
     * // Get one Patron
     * const patron = await prisma.patron.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends patronFindFirstOrThrowArgs>(args?: SelectSubset<T, patronFindFirstOrThrowArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patrons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patronFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patrons
     * const patrons = await prisma.patron.findMany()
     * 
     * // Get first 10 Patrons
     * const patrons = await prisma.patron.findMany({ take: 10 })
     * 
     * // Only select the `PatronID`
     * const patronWithPatronIDOnly = await prisma.patron.findMany({ select: { PatronID: true } })
     * 
     */
    findMany<T extends patronFindManyArgs>(args?: SelectSubset<T, patronFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patron.
     * @param {patronCreateArgs} args - Arguments to create a Patron.
     * @example
     * // Create one Patron
     * const Patron = await prisma.patron.create({
     *   data: {
     *     // ... data to create a Patron
     *   }
     * })
     * 
     */
    create<T extends patronCreateArgs>(args: SelectSubset<T, patronCreateArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patrons.
     * @param {patronCreateManyArgs} args - Arguments to create many Patrons.
     * @example
     * // Create many Patrons
     * const patron = await prisma.patron.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends patronCreateManyArgs>(args?: SelectSubset<T, patronCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patrons and returns the data saved in the database.
     * @param {patronCreateManyAndReturnArgs} args - Arguments to create many Patrons.
     * @example
     * // Create many Patrons
     * const patron = await prisma.patron.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patrons and only return the `PatronID`
     * const patronWithPatronIDOnly = await prisma.patron.createManyAndReturn({
     *   select: { PatronID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends patronCreateManyAndReturnArgs>(args?: SelectSubset<T, patronCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patron.
     * @param {patronDeleteArgs} args - Arguments to delete one Patron.
     * @example
     * // Delete one Patron
     * const Patron = await prisma.patron.delete({
     *   where: {
     *     // ... filter to delete one Patron
     *   }
     * })
     * 
     */
    delete<T extends patronDeleteArgs>(args: SelectSubset<T, patronDeleteArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patron.
     * @param {patronUpdateArgs} args - Arguments to update one Patron.
     * @example
     * // Update one Patron
     * const patron = await prisma.patron.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends patronUpdateArgs>(args: SelectSubset<T, patronUpdateArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patrons.
     * @param {patronDeleteManyArgs} args - Arguments to filter Patrons to delete.
     * @example
     * // Delete a few Patrons
     * const { count } = await prisma.patron.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends patronDeleteManyArgs>(args?: SelectSubset<T, patronDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patronUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patrons
     * const patron = await prisma.patron.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends patronUpdateManyArgs>(args: SelectSubset<T, patronUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patrons and returns the data updated in the database.
     * @param {patronUpdateManyAndReturnArgs} args - Arguments to update many Patrons.
     * @example
     * // Update many Patrons
     * const patron = await prisma.patron.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patrons and only return the `PatronID`
     * const patronWithPatronIDOnly = await prisma.patron.updateManyAndReturn({
     *   select: { PatronID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends patronUpdateManyAndReturnArgs>(args: SelectSubset<T, patronUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patron.
     * @param {patronUpsertArgs} args - Arguments to update or create a Patron.
     * @example
     * // Update or create a Patron
     * const patron = await prisma.patron.upsert({
     *   create: {
     *     // ... data to create a Patron
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patron we want to update
     *   }
     * })
     */
    upsert<T extends patronUpsertArgs>(args: SelectSubset<T, patronUpsertArgs<ExtArgs>>): Prisma__patronClient<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patrons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patronCountArgs} args - Arguments to filter Patrons to count.
     * @example
     * // Count the number of Patrons
     * const count = await prisma.patron.count({
     *   where: {
     *     // ... the filter for the Patrons we want to count
     *   }
     * })
    **/
    count<T extends patronCountArgs>(
      args?: Subset<T, patronCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatronCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patron.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatronAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatronAggregateArgs>(args: Subset<T, PatronAggregateArgs>): Prisma.PrismaPromise<GetPatronAggregateType<T>>

    /**
     * Group by Patron.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {patronGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends patronGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: patronGroupByArgs['orderBy'] }
        : { orderBy?: patronGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, patronGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatronGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the patron model
   */
  readonly fields: patronFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for patron.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__patronClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    itemtransaction<T extends patron$itemtransactionArgs<ExtArgs> = {}>(args?: Subset<T, patron$itemtransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$itemtransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends patron$usersArgs<ExtArgs> = {}>(args?: Subset<T, patron$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the patron model
   */
  interface patronFieldRefs {
    readonly PatronID: FieldRef<"patron", 'Int'>
    readonly PatronFirstName: FieldRef<"patron", 'String'>
    readonly PatronMiddleName: FieldRef<"patron", 'String'>
    readonly PatronLastName: FieldRef<"patron", 'String'>
    readonly PatronDepartment: FieldRef<"patron", 'String'>
    readonly PatronSemester: FieldRef<"patron", 'String'>
    readonly PatronRollNo: FieldRef<"patron", 'String'>
    readonly PatronEnrollmentNumber: FieldRef<"patron", 'String'>
    readonly PatronImage: FieldRef<"patron", 'String'>
    readonly UserID: FieldRef<"patron", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * patron findUnique
   */
  export type patronFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * Filter, which patron to fetch.
     */
    where: patronWhereUniqueInput
  }

  /**
   * patron findUniqueOrThrow
   */
  export type patronFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * Filter, which patron to fetch.
     */
    where: patronWhereUniqueInput
  }

  /**
   * patron findFirst
   */
  export type patronFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * Filter, which patron to fetch.
     */
    where?: patronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patrons to fetch.
     */
    orderBy?: patronOrderByWithRelationInput | patronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patrons.
     */
    cursor?: patronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patrons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patrons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patrons.
     */
    distinct?: PatronScalarFieldEnum | PatronScalarFieldEnum[]
  }

  /**
   * patron findFirstOrThrow
   */
  export type patronFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * Filter, which patron to fetch.
     */
    where?: patronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patrons to fetch.
     */
    orderBy?: patronOrderByWithRelationInput | patronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for patrons.
     */
    cursor?: patronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patrons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patrons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of patrons.
     */
    distinct?: PatronScalarFieldEnum | PatronScalarFieldEnum[]
  }

  /**
   * patron findMany
   */
  export type patronFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * Filter, which patrons to fetch.
     */
    where?: patronWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of patrons to fetch.
     */
    orderBy?: patronOrderByWithRelationInput | patronOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing patrons.
     */
    cursor?: patronWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` patrons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` patrons.
     */
    skip?: number
    distinct?: PatronScalarFieldEnum | PatronScalarFieldEnum[]
  }

  /**
   * patron create
   */
  export type patronCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * The data needed to create a patron.
     */
    data: XOR<patronCreateInput, patronUncheckedCreateInput>
  }

  /**
   * patron createMany
   */
  export type patronCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many patrons.
     */
    data: patronCreateManyInput | patronCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * patron createManyAndReturn
   */
  export type patronCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * The data used to create many patrons.
     */
    data: patronCreateManyInput | patronCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * patron update
   */
  export type patronUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * The data needed to update a patron.
     */
    data: XOR<patronUpdateInput, patronUncheckedUpdateInput>
    /**
     * Choose, which patron to update.
     */
    where: patronWhereUniqueInput
  }

  /**
   * patron updateMany
   */
  export type patronUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update patrons.
     */
    data: XOR<patronUpdateManyMutationInput, patronUncheckedUpdateManyInput>
    /**
     * Filter which patrons to update
     */
    where?: patronWhereInput
    /**
     * Limit how many patrons to update.
     */
    limit?: number
  }

  /**
   * patron updateManyAndReturn
   */
  export type patronUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * The data used to update patrons.
     */
    data: XOR<patronUpdateManyMutationInput, patronUncheckedUpdateManyInput>
    /**
     * Filter which patrons to update
     */
    where?: patronWhereInput
    /**
     * Limit how many patrons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * patron upsert
   */
  export type patronUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * The filter to search for the patron to update in case it exists.
     */
    where: patronWhereUniqueInput
    /**
     * In case the patron found by the `where` argument doesn't exist, create a new patron with this data.
     */
    create: XOR<patronCreateInput, patronUncheckedCreateInput>
    /**
     * In case the patron was found with the provided `where` argument, update it with this data.
     */
    update: XOR<patronUpdateInput, patronUncheckedUpdateInput>
  }

  /**
   * patron delete
   */
  export type patronDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    /**
     * Filter which patron to delete.
     */
    where: patronWhereUniqueInput
  }

  /**
   * patron deleteMany
   */
  export type patronDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which patrons to delete
     */
    where?: patronWhereInput
    /**
     * Limit how many patrons to delete.
     */
    limit?: number
  }

  /**
   * patron.itemtransaction
   */
  export type patron$itemtransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the itemtransaction
     */
    select?: itemtransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the itemtransaction
     */
    omit?: itemtransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: itemtransactionInclude<ExtArgs> | null
    where?: itemtransactionWhereInput
    orderBy?: itemtransactionOrderByWithRelationInput | itemtransactionOrderByWithRelationInput[]
    cursor?: itemtransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemtransactionScalarFieldEnum | ItemtransactionScalarFieldEnum[]
  }

  /**
   * patron.users
   */
  export type patron$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * patron without action
   */
  export type patronDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
  }


  /**
   * Model user_type
   */

  export type AggregateUser_type = {
    _count: User_typeCountAggregateOutputType | null
    _avg: User_typeAvgAggregateOutputType | null
    _sum: User_typeSumAggregateOutputType | null
    _min: User_typeMinAggregateOutputType | null
    _max: User_typeMaxAggregateOutputType | null
  }

  export type User_typeAvgAggregateOutputType = {
    UserTypeID: number | null
  }

  export type User_typeSumAggregateOutputType = {
    UserTypeID: number | null
  }

  export type User_typeMinAggregateOutputType = {
    UserTypeID: number | null
    UserTypeName: string | null
    IsLibrarian: boolean | null
    IsAdmin: boolean | null
    IsStudent: boolean | null
  }

  export type User_typeMaxAggregateOutputType = {
    UserTypeID: number | null
    UserTypeName: string | null
    IsLibrarian: boolean | null
    IsAdmin: boolean | null
    IsStudent: boolean | null
  }

  export type User_typeCountAggregateOutputType = {
    UserTypeID: number
    UserTypeName: number
    IsLibrarian: number
    IsAdmin: number
    IsStudent: number
    _all: number
  }


  export type User_typeAvgAggregateInputType = {
    UserTypeID?: true
  }

  export type User_typeSumAggregateInputType = {
    UserTypeID?: true
  }

  export type User_typeMinAggregateInputType = {
    UserTypeID?: true
    UserTypeName?: true
    IsLibrarian?: true
    IsAdmin?: true
    IsStudent?: true
  }

  export type User_typeMaxAggregateInputType = {
    UserTypeID?: true
    UserTypeName?: true
    IsLibrarian?: true
    IsAdmin?: true
    IsStudent?: true
  }

  export type User_typeCountAggregateInputType = {
    UserTypeID?: true
    UserTypeName?: true
    IsLibrarian?: true
    IsAdmin?: true
    IsStudent?: true
    _all?: true
  }

  export type User_typeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_type to aggregate.
     */
    where?: user_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_types to fetch.
     */
    orderBy?: user_typeOrderByWithRelationInput | user_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_types
    **/
    _count?: true | User_typeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_typeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_typeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_typeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_typeMaxAggregateInputType
  }

  export type GetUser_typeAggregateType<T extends User_typeAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_type]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_type[P]>
      : GetScalarType<T[P], AggregateUser_type[P]>
  }




  export type user_typeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_typeWhereInput
    orderBy?: user_typeOrderByWithAggregationInput | user_typeOrderByWithAggregationInput[]
    by: User_typeScalarFieldEnum[] | User_typeScalarFieldEnum
    having?: user_typeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_typeCountAggregateInputType | true
    _avg?: User_typeAvgAggregateInputType
    _sum?: User_typeSumAggregateInputType
    _min?: User_typeMinAggregateInputType
    _max?: User_typeMaxAggregateInputType
  }

  export type User_typeGroupByOutputType = {
    UserTypeID: number
    UserTypeName: string
    IsLibrarian: boolean | null
    IsAdmin: boolean | null
    IsStudent: boolean | null
    _count: User_typeCountAggregateOutputType | null
    _avg: User_typeAvgAggregateOutputType | null
    _sum: User_typeSumAggregateOutputType | null
    _min: User_typeMinAggregateOutputType | null
    _max: User_typeMaxAggregateOutputType | null
  }

  type GetUser_typeGroupByPayload<T extends user_typeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_typeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_typeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_typeGroupByOutputType[P]>
            : GetScalarType<T[P], User_typeGroupByOutputType[P]>
        }
      >
    >


  export type user_typeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserTypeID?: boolean
    UserTypeName?: boolean
    IsLibrarian?: boolean
    IsAdmin?: boolean
    IsStudent?: boolean
    users?: boolean | user_type$usersArgs<ExtArgs>
    _count?: boolean | User_typeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_type"]>

  export type user_typeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserTypeID?: boolean
    UserTypeName?: boolean
    IsLibrarian?: boolean
    IsAdmin?: boolean
    IsStudent?: boolean
  }, ExtArgs["result"]["user_type"]>

  export type user_typeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserTypeID?: boolean
    UserTypeName?: boolean
    IsLibrarian?: boolean
    IsAdmin?: boolean
    IsStudent?: boolean
  }, ExtArgs["result"]["user_type"]>

  export type user_typeSelectScalar = {
    UserTypeID?: boolean
    UserTypeName?: boolean
    IsLibrarian?: boolean
    IsAdmin?: boolean
    IsStudent?: boolean
  }

  export type user_typeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserTypeID" | "UserTypeName" | "IsLibrarian" | "IsAdmin" | "IsStudent", ExtArgs["result"]["user_type"]>
  export type user_typeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | user_type$usersArgs<ExtArgs>
    _count?: boolean | User_typeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type user_typeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type user_typeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $user_typePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_type"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      UserTypeID: number
      UserTypeName: string
      IsLibrarian: boolean | null
      IsAdmin: boolean | null
      IsStudent: boolean | null
    }, ExtArgs["result"]["user_type"]>
    composites: {}
  }

  type user_typeGetPayload<S extends boolean | null | undefined | user_typeDefaultArgs> = $Result.GetResult<Prisma.$user_typePayload, S>

  type user_typeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_typeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_typeCountAggregateInputType | true
    }

  export interface user_typeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_type'], meta: { name: 'user_type' } }
    /**
     * Find zero or one User_type that matches the filter.
     * @param {user_typeFindUniqueArgs} args - Arguments to find a User_type
     * @example
     * // Get one User_type
     * const user_type = await prisma.user_type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_typeFindUniqueArgs>(args: SelectSubset<T, user_typeFindUniqueArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_typeFindUniqueOrThrowArgs} args - Arguments to find a User_type
     * @example
     * // Get one User_type
     * const user_type = await prisma.user_type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_typeFindUniqueOrThrowArgs>(args: SelectSubset<T, user_typeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_typeFindFirstArgs} args - Arguments to find a User_type
     * @example
     * // Get one User_type
     * const user_type = await prisma.user_type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_typeFindFirstArgs>(args?: SelectSubset<T, user_typeFindFirstArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_typeFindFirstOrThrowArgs} args - Arguments to find a User_type
     * @example
     * // Get one User_type
     * const user_type = await prisma.user_type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_typeFindFirstOrThrowArgs>(args?: SelectSubset<T, user_typeFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_typeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_types
     * const user_types = await prisma.user_type.findMany()
     * 
     * // Get first 10 User_types
     * const user_types = await prisma.user_type.findMany({ take: 10 })
     * 
     * // Only select the `UserTypeID`
     * const user_typeWithUserTypeIDOnly = await prisma.user_type.findMany({ select: { UserTypeID: true } })
     * 
     */
    findMany<T extends user_typeFindManyArgs>(args?: SelectSubset<T, user_typeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_type.
     * @param {user_typeCreateArgs} args - Arguments to create a User_type.
     * @example
     * // Create one User_type
     * const User_type = await prisma.user_type.create({
     *   data: {
     *     // ... data to create a User_type
     *   }
     * })
     * 
     */
    create<T extends user_typeCreateArgs>(args: SelectSubset<T, user_typeCreateArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_types.
     * @param {user_typeCreateManyArgs} args - Arguments to create many User_types.
     * @example
     * // Create many User_types
     * const user_type = await prisma.user_type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_typeCreateManyArgs>(args?: SelectSubset<T, user_typeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_types and returns the data saved in the database.
     * @param {user_typeCreateManyAndReturnArgs} args - Arguments to create many User_types.
     * @example
     * // Create many User_types
     * const user_type = await prisma.user_type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_types and only return the `UserTypeID`
     * const user_typeWithUserTypeIDOnly = await prisma.user_type.createManyAndReturn({
     *   select: { UserTypeID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_typeCreateManyAndReturnArgs>(args?: SelectSubset<T, user_typeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_type.
     * @param {user_typeDeleteArgs} args - Arguments to delete one User_type.
     * @example
     * // Delete one User_type
     * const User_type = await prisma.user_type.delete({
     *   where: {
     *     // ... filter to delete one User_type
     *   }
     * })
     * 
     */
    delete<T extends user_typeDeleteArgs>(args: SelectSubset<T, user_typeDeleteArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_type.
     * @param {user_typeUpdateArgs} args - Arguments to update one User_type.
     * @example
     * // Update one User_type
     * const user_type = await prisma.user_type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_typeUpdateArgs>(args: SelectSubset<T, user_typeUpdateArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_types.
     * @param {user_typeDeleteManyArgs} args - Arguments to filter User_types to delete.
     * @example
     * // Delete a few User_types
     * const { count } = await prisma.user_type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_typeDeleteManyArgs>(args?: SelectSubset<T, user_typeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_typeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_types
     * const user_type = await prisma.user_type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_typeUpdateManyArgs>(args: SelectSubset<T, user_typeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_types and returns the data updated in the database.
     * @param {user_typeUpdateManyAndReturnArgs} args - Arguments to update many User_types.
     * @example
     * // Update many User_types
     * const user_type = await prisma.user_type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_types and only return the `UserTypeID`
     * const user_typeWithUserTypeIDOnly = await prisma.user_type.updateManyAndReturn({
     *   select: { UserTypeID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_typeUpdateManyAndReturnArgs>(args: SelectSubset<T, user_typeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_type.
     * @param {user_typeUpsertArgs} args - Arguments to update or create a User_type.
     * @example
     * // Update or create a User_type
     * const user_type = await prisma.user_type.upsert({
     *   create: {
     *     // ... data to create a User_type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_type we want to update
     *   }
     * })
     */
    upsert<T extends user_typeUpsertArgs>(args: SelectSubset<T, user_typeUpsertArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_typeCountArgs} args - Arguments to filter User_types to count.
     * @example
     * // Count the number of User_types
     * const count = await prisma.user_type.count({
     *   where: {
     *     // ... the filter for the User_types we want to count
     *   }
     * })
    **/
    count<T extends user_typeCountArgs>(
      args?: Subset<T, user_typeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_typeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_typeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_typeAggregateArgs>(args: Subset<T, User_typeAggregateArgs>): Prisma.PrismaPromise<GetUser_typeAggregateType<T>>

    /**
     * Group by User_type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_typeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_typeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_typeGroupByArgs['orderBy'] }
        : { orderBy?: user_typeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_typeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_typeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_type model
   */
  readonly fields: user_typeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_typeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends user_type$usersArgs<ExtArgs> = {}>(args?: Subset<T, user_type$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_type model
   */
  interface user_typeFieldRefs {
    readonly UserTypeID: FieldRef<"user_type", 'Int'>
    readonly UserTypeName: FieldRef<"user_type", 'String'>
    readonly IsLibrarian: FieldRef<"user_type", 'Boolean'>
    readonly IsAdmin: FieldRef<"user_type", 'Boolean'>
    readonly IsStudent: FieldRef<"user_type", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * user_type findUnique
   */
  export type user_typeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * Filter, which user_type to fetch.
     */
    where: user_typeWhereUniqueInput
  }

  /**
   * user_type findUniqueOrThrow
   */
  export type user_typeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * Filter, which user_type to fetch.
     */
    where: user_typeWhereUniqueInput
  }

  /**
   * user_type findFirst
   */
  export type user_typeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * Filter, which user_type to fetch.
     */
    where?: user_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_types to fetch.
     */
    orderBy?: user_typeOrderByWithRelationInput | user_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_types.
     */
    cursor?: user_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_types.
     */
    distinct?: User_typeScalarFieldEnum | User_typeScalarFieldEnum[]
  }

  /**
   * user_type findFirstOrThrow
   */
  export type user_typeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * Filter, which user_type to fetch.
     */
    where?: user_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_types to fetch.
     */
    orderBy?: user_typeOrderByWithRelationInput | user_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_types.
     */
    cursor?: user_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_types.
     */
    distinct?: User_typeScalarFieldEnum | User_typeScalarFieldEnum[]
  }

  /**
   * user_type findMany
   */
  export type user_typeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * Filter, which user_types to fetch.
     */
    where?: user_typeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_types to fetch.
     */
    orderBy?: user_typeOrderByWithRelationInput | user_typeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_types.
     */
    cursor?: user_typeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_types.
     */
    skip?: number
    distinct?: User_typeScalarFieldEnum | User_typeScalarFieldEnum[]
  }

  /**
   * user_type create
   */
  export type user_typeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * The data needed to create a user_type.
     */
    data: XOR<user_typeCreateInput, user_typeUncheckedCreateInput>
  }

  /**
   * user_type createMany
   */
  export type user_typeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_types.
     */
    data: user_typeCreateManyInput | user_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_type createManyAndReturn
   */
  export type user_typeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * The data used to create many user_types.
     */
    data: user_typeCreateManyInput | user_typeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_type update
   */
  export type user_typeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * The data needed to update a user_type.
     */
    data: XOR<user_typeUpdateInput, user_typeUncheckedUpdateInput>
    /**
     * Choose, which user_type to update.
     */
    where: user_typeWhereUniqueInput
  }

  /**
   * user_type updateMany
   */
  export type user_typeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_types.
     */
    data: XOR<user_typeUpdateManyMutationInput, user_typeUncheckedUpdateManyInput>
    /**
     * Filter which user_types to update
     */
    where?: user_typeWhereInput
    /**
     * Limit how many user_types to update.
     */
    limit?: number
  }

  /**
   * user_type updateManyAndReturn
   */
  export type user_typeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * The data used to update user_types.
     */
    data: XOR<user_typeUpdateManyMutationInput, user_typeUncheckedUpdateManyInput>
    /**
     * Filter which user_types to update
     */
    where?: user_typeWhereInput
    /**
     * Limit how many user_types to update.
     */
    limit?: number
  }

  /**
   * user_type upsert
   */
  export type user_typeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * The filter to search for the user_type to update in case it exists.
     */
    where: user_typeWhereUniqueInput
    /**
     * In case the user_type found by the `where` argument doesn't exist, create a new user_type with this data.
     */
    create: XOR<user_typeCreateInput, user_typeUncheckedCreateInput>
    /**
     * In case the user_type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_typeUpdateInput, user_typeUncheckedUpdateInput>
  }

  /**
   * user_type delete
   */
  export type user_typeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
    /**
     * Filter which user_type to delete.
     */
    where: user_typeWhereUniqueInput
  }

  /**
   * user_type deleteMany
   */
  export type user_typeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_types to delete
     */
    where?: user_typeWhereInput
    /**
     * Limit how many user_types to delete.
     */
    limit?: number
  }

  /**
   * user_type.users
   */
  export type user_type$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * user_type without action
   */
  export type user_typeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_type
     */
    select?: user_typeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_type
     */
    omit?: user_typeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_typeInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    UserID: number | null
    UserTypeID: number | null
  }

  export type UsersSumAggregateOutputType = {
    UserID: number | null
    UserTypeID: number | null
  }

  export type UsersMinAggregateOutputType = {
    UserID: number | null
    UserName: string | null
    UserPass: string | null
    UserEmail: string | null
    UserTypeID: number | null
  }

  export type UsersMaxAggregateOutputType = {
    UserID: number | null
    UserName: string | null
    UserPass: string | null
    UserEmail: string | null
    UserTypeID: number | null
  }

  export type UsersCountAggregateOutputType = {
    UserID: number
    UserName: number
    UserPass: number
    UserEmail: number
    UserTypeID: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    UserID?: true
    UserTypeID?: true
  }

  export type UsersSumAggregateInputType = {
    UserID?: true
    UserTypeID?: true
  }

  export type UsersMinAggregateInputType = {
    UserID?: true
    UserName?: true
    UserPass?: true
    UserEmail?: true
    UserTypeID?: true
  }

  export type UsersMaxAggregateInputType = {
    UserID?: true
    UserName?: true
    UserPass?: true
    UserEmail?: true
    UserTypeID?: true
  }

  export type UsersCountAggregateInputType = {
    UserID?: true
    UserName?: true
    UserPass?: true
    UserEmail?: true
    UserTypeID?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    UserID: number
    UserName: string
    UserPass: string
    UserEmail: string | null
    UserTypeID: number
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    UserName?: boolean
    UserPass?: boolean
    UserEmail?: boolean
    UserTypeID?: boolean
    librarian?: boolean | users$librarianArgs<ExtArgs>
    patron?: boolean | users$patronArgs<ExtArgs>
    user_type?: boolean | user_typeDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    UserName?: boolean
    UserPass?: boolean
    UserEmail?: boolean
    UserTypeID?: boolean
    user_type?: boolean | user_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    UserID?: boolean
    UserName?: boolean
    UserPass?: boolean
    UserEmail?: boolean
    UserTypeID?: boolean
    user_type?: boolean | user_typeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    UserID?: boolean
    UserName?: boolean
    UserPass?: boolean
    UserEmail?: boolean
    UserTypeID?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"UserID" | "UserName" | "UserPass" | "UserEmail" | "UserTypeID", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    librarian?: boolean | users$librarianArgs<ExtArgs>
    patron?: boolean | users$patronArgs<ExtArgs>
    user_type?: boolean | user_typeDefaultArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_type?: boolean | user_typeDefaultArgs<ExtArgs>
  }
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_type?: boolean | user_typeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      librarian: Prisma.$librarianPayload<ExtArgs>[]
      patron: Prisma.$patronPayload<ExtArgs>[]
      user_type: Prisma.$user_typePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      UserID: number
      UserName: string
      UserPass: string
      UserEmail: string | null
      UserTypeID: number
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `UserID`
     * const usersWithUserIDOnly = await prisma.users.findMany({ select: { UserID: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `UserID`
     * const usersWithUserIDOnly = await prisma.users.createManyAndReturn({
     *   select: { UserID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `UserID`
     * const usersWithUserIDOnly = await prisma.users.updateManyAndReturn({
     *   select: { UserID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    librarian<T extends users$librarianArgs<ExtArgs> = {}>(args?: Subset<T, users$librarianArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$librarianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patron<T extends users$patronArgs<ExtArgs> = {}>(args?: Subset<T, users$patronArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$patronPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_type<T extends user_typeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_typeDefaultArgs<ExtArgs>>): Prisma__user_typeClient<$Result.GetResult<Prisma.$user_typePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly UserID: FieldRef<"users", 'Int'>
    readonly UserName: FieldRef<"users", 'String'>
    readonly UserPass: FieldRef<"users", 'String'>
    readonly UserEmail: FieldRef<"users", 'String'>
    readonly UserTypeID: FieldRef<"users", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.librarian
   */
  export type users$librarianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the librarian
     */
    select?: librarianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the librarian
     */
    omit?: librarianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: librarianInclude<ExtArgs> | null
    where?: librarianWhereInput
    orderBy?: librarianOrderByWithRelationInput | librarianOrderByWithRelationInput[]
    cursor?: librarianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibrarianScalarFieldEnum | LibrarianScalarFieldEnum[]
  }

  /**
   * users.patron
   */
  export type users$patronArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the patron
     */
    select?: patronSelect<ExtArgs> | null
    /**
     * Omit specific fields from the patron
     */
    omit?: patronOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: patronInclude<ExtArgs> | null
    where?: patronWhereInput
    orderBy?: patronOrderByWithRelationInput | patronOrderByWithRelationInput[]
    cursor?: patronWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatronScalarFieldEnum | PatronScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    ItemID: 'ItemID',
    ItemTitle: 'ItemTitle',
    ItemAuthor: 'ItemAuthor',
    ItemType: 'ItemType',
    ItemPrice: 'ItemPrice',
    ItemImage: 'ItemImage'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemtransactionScalarFieldEnum: {
    ItemTranID: 'ItemTranID',
    ItemID: 'ItemID',
    IsAvailable: 'IsAvailable',
    ItemAssignedTo: 'ItemAssignedTo',
    IsVisible: 'IsVisible'
  };

  export type ItemtransactionScalarFieldEnum = (typeof ItemtransactionScalarFieldEnum)[keyof typeof ItemtransactionScalarFieldEnum]


  export const LibrarianScalarFieldEnum: {
    LibrarianID: 'LibrarianID',
    LibrarianName: 'LibrarianName',
    UserID: 'UserID'
  };

  export type LibrarianScalarFieldEnum = (typeof LibrarianScalarFieldEnum)[keyof typeof LibrarianScalarFieldEnum]


  export const PatronScalarFieldEnum: {
    PatronID: 'PatronID',
    PatronFirstName: 'PatronFirstName',
    PatronMiddleName: 'PatronMiddleName',
    PatronLastName: 'PatronLastName',
    PatronDepartment: 'PatronDepartment',
    PatronSemester: 'PatronSemester',
    PatronRollNo: 'PatronRollNo',
    PatronEnrollmentNumber: 'PatronEnrollmentNumber',
    PatronImage: 'PatronImage',
    UserID: 'UserID'
  };

  export type PatronScalarFieldEnum = (typeof PatronScalarFieldEnum)[keyof typeof PatronScalarFieldEnum]


  export const User_typeScalarFieldEnum: {
    UserTypeID: 'UserTypeID',
    UserTypeName: 'UserTypeName',
    IsLibrarian: 'IsLibrarian',
    IsAdmin: 'IsAdmin',
    IsStudent: 'IsStudent'
  };

  export type User_typeScalarFieldEnum = (typeof User_typeScalarFieldEnum)[keyof typeof User_typeScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    UserID: 'UserID',
    UserName: 'UserName',
    UserPass: 'UserPass',
    UserEmail: 'UserEmail',
    UserTypeID: 'UserTypeID'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type itemWhereInput = {
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    ItemID?: IntFilter<"item"> | number
    ItemTitle?: StringFilter<"item"> | string
    ItemAuthor?: StringNullableFilter<"item"> | string | null
    ItemType?: StringNullableFilter<"item"> | string | null
    ItemPrice?: DecimalNullableFilter<"item"> | Decimal | DecimalJsLike | number | string | null
    ItemImage?: StringNullableFilter<"item"> | string | null
    itemtransaction?: ItemtransactionListRelationFilter
  }

  export type itemOrderByWithRelationInput = {
    ItemID?: SortOrder
    ItemTitle?: SortOrder
    ItemAuthor?: SortOrderInput | SortOrder
    ItemType?: SortOrderInput | SortOrder
    ItemPrice?: SortOrderInput | SortOrder
    ItemImage?: SortOrderInput | SortOrder
    itemtransaction?: itemtransactionOrderByRelationAggregateInput
  }

  export type itemWhereUniqueInput = Prisma.AtLeast<{
    ItemID?: number
    AND?: itemWhereInput | itemWhereInput[]
    OR?: itemWhereInput[]
    NOT?: itemWhereInput | itemWhereInput[]
    ItemTitle?: StringFilter<"item"> | string
    ItemAuthor?: StringNullableFilter<"item"> | string | null
    ItemType?: StringNullableFilter<"item"> | string | null
    ItemPrice?: DecimalNullableFilter<"item"> | Decimal | DecimalJsLike | number | string | null
    ItemImage?: StringNullableFilter<"item"> | string | null
    itemtransaction?: ItemtransactionListRelationFilter
  }, "ItemID">

  export type itemOrderByWithAggregationInput = {
    ItemID?: SortOrder
    ItemTitle?: SortOrder
    ItemAuthor?: SortOrderInput | SortOrder
    ItemType?: SortOrderInput | SortOrder
    ItemPrice?: SortOrderInput | SortOrder
    ItemImage?: SortOrderInput | SortOrder
    _count?: itemCountOrderByAggregateInput
    _avg?: itemAvgOrderByAggregateInput
    _max?: itemMaxOrderByAggregateInput
    _min?: itemMinOrderByAggregateInput
    _sum?: itemSumOrderByAggregateInput
  }

  export type itemScalarWhereWithAggregatesInput = {
    AND?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    OR?: itemScalarWhereWithAggregatesInput[]
    NOT?: itemScalarWhereWithAggregatesInput | itemScalarWhereWithAggregatesInput[]
    ItemID?: IntWithAggregatesFilter<"item"> | number
    ItemTitle?: StringWithAggregatesFilter<"item"> | string
    ItemAuthor?: StringNullableWithAggregatesFilter<"item"> | string | null
    ItemType?: StringNullableWithAggregatesFilter<"item"> | string | null
    ItemPrice?: DecimalNullableWithAggregatesFilter<"item"> | Decimal | DecimalJsLike | number | string | null
    ItemImage?: StringNullableWithAggregatesFilter<"item"> | string | null
  }

  export type itemtransactionWhereInput = {
    AND?: itemtransactionWhereInput | itemtransactionWhereInput[]
    OR?: itemtransactionWhereInput[]
    NOT?: itemtransactionWhereInput | itemtransactionWhereInput[]
    ItemTranID?: IntFilter<"itemtransaction"> | number
    ItemID?: IntFilter<"itemtransaction"> | number
    IsAvailable?: BoolNullableFilter<"itemtransaction"> | boolean | null
    ItemAssignedTo?: IntNullableFilter<"itemtransaction"> | number | null
    IsVisible?: BoolNullableFilter<"itemtransaction"> | boolean | null
    patron?: XOR<PatronNullableScalarRelationFilter, patronWhereInput> | null
    item?: XOR<ItemScalarRelationFilter, itemWhereInput>
  }

  export type itemtransactionOrderByWithRelationInput = {
    ItemTranID?: SortOrder
    ItemID?: SortOrder
    IsAvailable?: SortOrderInput | SortOrder
    ItemAssignedTo?: SortOrderInput | SortOrder
    IsVisible?: SortOrderInput | SortOrder
    patron?: patronOrderByWithRelationInput
    item?: itemOrderByWithRelationInput
  }

  export type itemtransactionWhereUniqueInput = Prisma.AtLeast<{
    ItemTranID?: number
    AND?: itemtransactionWhereInput | itemtransactionWhereInput[]
    OR?: itemtransactionWhereInput[]
    NOT?: itemtransactionWhereInput | itemtransactionWhereInput[]
    ItemID?: IntFilter<"itemtransaction"> | number
    IsAvailable?: BoolNullableFilter<"itemtransaction"> | boolean | null
    ItemAssignedTo?: IntNullableFilter<"itemtransaction"> | number | null
    IsVisible?: BoolNullableFilter<"itemtransaction"> | boolean | null
    patron?: XOR<PatronNullableScalarRelationFilter, patronWhereInput> | null
    item?: XOR<ItemScalarRelationFilter, itemWhereInput>
  }, "ItemTranID">

  export type itemtransactionOrderByWithAggregationInput = {
    ItemTranID?: SortOrder
    ItemID?: SortOrder
    IsAvailable?: SortOrderInput | SortOrder
    ItemAssignedTo?: SortOrderInput | SortOrder
    IsVisible?: SortOrderInput | SortOrder
    _count?: itemtransactionCountOrderByAggregateInput
    _avg?: itemtransactionAvgOrderByAggregateInput
    _max?: itemtransactionMaxOrderByAggregateInput
    _min?: itemtransactionMinOrderByAggregateInput
    _sum?: itemtransactionSumOrderByAggregateInput
  }

  export type itemtransactionScalarWhereWithAggregatesInput = {
    AND?: itemtransactionScalarWhereWithAggregatesInput | itemtransactionScalarWhereWithAggregatesInput[]
    OR?: itemtransactionScalarWhereWithAggregatesInput[]
    NOT?: itemtransactionScalarWhereWithAggregatesInput | itemtransactionScalarWhereWithAggregatesInput[]
    ItemTranID?: IntWithAggregatesFilter<"itemtransaction"> | number
    ItemID?: IntWithAggregatesFilter<"itemtransaction"> | number
    IsAvailable?: BoolNullableWithAggregatesFilter<"itemtransaction"> | boolean | null
    ItemAssignedTo?: IntNullableWithAggregatesFilter<"itemtransaction"> | number | null
    IsVisible?: BoolNullableWithAggregatesFilter<"itemtransaction"> | boolean | null
  }

  export type librarianWhereInput = {
    AND?: librarianWhereInput | librarianWhereInput[]
    OR?: librarianWhereInput[]
    NOT?: librarianWhereInput | librarianWhereInput[]
    LibrarianID?: IntFilter<"librarian"> | number
    LibrarianName?: StringFilter<"librarian"> | string
    UserID?: IntNullableFilter<"librarian"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type librarianOrderByWithRelationInput = {
    LibrarianID?: SortOrder
    LibrarianName?: SortOrder
    UserID?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type librarianWhereUniqueInput = Prisma.AtLeast<{
    LibrarianID?: number
    AND?: librarianWhereInput | librarianWhereInput[]
    OR?: librarianWhereInput[]
    NOT?: librarianWhereInput | librarianWhereInput[]
    LibrarianName?: StringFilter<"librarian"> | string
    UserID?: IntNullableFilter<"librarian"> | number | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "LibrarianID">

  export type librarianOrderByWithAggregationInput = {
    LibrarianID?: SortOrder
    LibrarianName?: SortOrder
    UserID?: SortOrderInput | SortOrder
    _count?: librarianCountOrderByAggregateInput
    _avg?: librarianAvgOrderByAggregateInput
    _max?: librarianMaxOrderByAggregateInput
    _min?: librarianMinOrderByAggregateInput
    _sum?: librarianSumOrderByAggregateInput
  }

  export type librarianScalarWhereWithAggregatesInput = {
    AND?: librarianScalarWhereWithAggregatesInput | librarianScalarWhereWithAggregatesInput[]
    OR?: librarianScalarWhereWithAggregatesInput[]
    NOT?: librarianScalarWhereWithAggregatesInput | librarianScalarWhereWithAggregatesInput[]
    LibrarianID?: IntWithAggregatesFilter<"librarian"> | number
    LibrarianName?: StringWithAggregatesFilter<"librarian"> | string
    UserID?: IntNullableWithAggregatesFilter<"librarian"> | number | null
  }

  export type patronWhereInput = {
    AND?: patronWhereInput | patronWhereInput[]
    OR?: patronWhereInput[]
    NOT?: patronWhereInput | patronWhereInput[]
    PatronID?: IntFilter<"patron"> | number
    PatronFirstName?: StringFilter<"patron"> | string
    PatronMiddleName?: StringNullableFilter<"patron"> | string | null
    PatronLastName?: StringFilter<"patron"> | string
    PatronDepartment?: StringNullableFilter<"patron"> | string | null
    PatronSemester?: StringNullableFilter<"patron"> | string | null
    PatronRollNo?: StringNullableFilter<"patron"> | string | null
    PatronEnrollmentNumber?: StringNullableFilter<"patron"> | string | null
    PatronImage?: StringNullableFilter<"patron"> | string | null
    UserID?: IntNullableFilter<"patron"> | number | null
    itemtransaction?: ItemtransactionListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type patronOrderByWithRelationInput = {
    PatronID?: SortOrder
    PatronFirstName?: SortOrder
    PatronMiddleName?: SortOrderInput | SortOrder
    PatronLastName?: SortOrder
    PatronDepartment?: SortOrderInput | SortOrder
    PatronSemester?: SortOrderInput | SortOrder
    PatronRollNo?: SortOrderInput | SortOrder
    PatronEnrollmentNumber?: SortOrderInput | SortOrder
    PatronImage?: SortOrderInput | SortOrder
    UserID?: SortOrderInput | SortOrder
    itemtransaction?: itemtransactionOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type patronWhereUniqueInput = Prisma.AtLeast<{
    PatronID?: number
    PatronRollNo?: string
    PatronEnrollmentNumber?: string
    AND?: patronWhereInput | patronWhereInput[]
    OR?: patronWhereInput[]
    NOT?: patronWhereInput | patronWhereInput[]
    PatronFirstName?: StringFilter<"patron"> | string
    PatronMiddleName?: StringNullableFilter<"patron"> | string | null
    PatronLastName?: StringFilter<"patron"> | string
    PatronDepartment?: StringNullableFilter<"patron"> | string | null
    PatronSemester?: StringNullableFilter<"patron"> | string | null
    PatronImage?: StringNullableFilter<"patron"> | string | null
    UserID?: IntNullableFilter<"patron"> | number | null
    itemtransaction?: ItemtransactionListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "PatronID" | "PatronRollNo" | "PatronEnrollmentNumber">

  export type patronOrderByWithAggregationInput = {
    PatronID?: SortOrder
    PatronFirstName?: SortOrder
    PatronMiddleName?: SortOrderInput | SortOrder
    PatronLastName?: SortOrder
    PatronDepartment?: SortOrderInput | SortOrder
    PatronSemester?: SortOrderInput | SortOrder
    PatronRollNo?: SortOrderInput | SortOrder
    PatronEnrollmentNumber?: SortOrderInput | SortOrder
    PatronImage?: SortOrderInput | SortOrder
    UserID?: SortOrderInput | SortOrder
    _count?: patronCountOrderByAggregateInput
    _avg?: patronAvgOrderByAggregateInput
    _max?: patronMaxOrderByAggregateInput
    _min?: patronMinOrderByAggregateInput
    _sum?: patronSumOrderByAggregateInput
  }

  export type patronScalarWhereWithAggregatesInput = {
    AND?: patronScalarWhereWithAggregatesInput | patronScalarWhereWithAggregatesInput[]
    OR?: patronScalarWhereWithAggregatesInput[]
    NOT?: patronScalarWhereWithAggregatesInput | patronScalarWhereWithAggregatesInput[]
    PatronID?: IntWithAggregatesFilter<"patron"> | number
    PatronFirstName?: StringWithAggregatesFilter<"patron"> | string
    PatronMiddleName?: StringNullableWithAggregatesFilter<"patron"> | string | null
    PatronLastName?: StringWithAggregatesFilter<"patron"> | string
    PatronDepartment?: StringNullableWithAggregatesFilter<"patron"> | string | null
    PatronSemester?: StringNullableWithAggregatesFilter<"patron"> | string | null
    PatronRollNo?: StringNullableWithAggregatesFilter<"patron"> | string | null
    PatronEnrollmentNumber?: StringNullableWithAggregatesFilter<"patron"> | string | null
    PatronImage?: StringNullableWithAggregatesFilter<"patron"> | string | null
    UserID?: IntNullableWithAggregatesFilter<"patron"> | number | null
  }

  export type user_typeWhereInput = {
    AND?: user_typeWhereInput | user_typeWhereInput[]
    OR?: user_typeWhereInput[]
    NOT?: user_typeWhereInput | user_typeWhereInput[]
    UserTypeID?: IntFilter<"user_type"> | number
    UserTypeName?: StringFilter<"user_type"> | string
    IsLibrarian?: BoolNullableFilter<"user_type"> | boolean | null
    IsAdmin?: BoolNullableFilter<"user_type"> | boolean | null
    IsStudent?: BoolNullableFilter<"user_type"> | boolean | null
    users?: UsersListRelationFilter
  }

  export type user_typeOrderByWithRelationInput = {
    UserTypeID?: SortOrder
    UserTypeName?: SortOrder
    IsLibrarian?: SortOrderInput | SortOrder
    IsAdmin?: SortOrderInput | SortOrder
    IsStudent?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
  }

  export type user_typeWhereUniqueInput = Prisma.AtLeast<{
    UserTypeID?: number
    UserTypeName?: string
    AND?: user_typeWhereInput | user_typeWhereInput[]
    OR?: user_typeWhereInput[]
    NOT?: user_typeWhereInput | user_typeWhereInput[]
    IsLibrarian?: BoolNullableFilter<"user_type"> | boolean | null
    IsAdmin?: BoolNullableFilter<"user_type"> | boolean | null
    IsStudent?: BoolNullableFilter<"user_type"> | boolean | null
    users?: UsersListRelationFilter
  }, "UserTypeID" | "UserTypeName">

  export type user_typeOrderByWithAggregationInput = {
    UserTypeID?: SortOrder
    UserTypeName?: SortOrder
    IsLibrarian?: SortOrderInput | SortOrder
    IsAdmin?: SortOrderInput | SortOrder
    IsStudent?: SortOrderInput | SortOrder
    _count?: user_typeCountOrderByAggregateInput
    _avg?: user_typeAvgOrderByAggregateInput
    _max?: user_typeMaxOrderByAggregateInput
    _min?: user_typeMinOrderByAggregateInput
    _sum?: user_typeSumOrderByAggregateInput
  }

  export type user_typeScalarWhereWithAggregatesInput = {
    AND?: user_typeScalarWhereWithAggregatesInput | user_typeScalarWhereWithAggregatesInput[]
    OR?: user_typeScalarWhereWithAggregatesInput[]
    NOT?: user_typeScalarWhereWithAggregatesInput | user_typeScalarWhereWithAggregatesInput[]
    UserTypeID?: IntWithAggregatesFilter<"user_type"> | number
    UserTypeName?: StringWithAggregatesFilter<"user_type"> | string
    IsLibrarian?: BoolNullableWithAggregatesFilter<"user_type"> | boolean | null
    IsAdmin?: BoolNullableWithAggregatesFilter<"user_type"> | boolean | null
    IsStudent?: BoolNullableWithAggregatesFilter<"user_type"> | boolean | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    UserID?: IntFilter<"users"> | number
    UserName?: StringFilter<"users"> | string
    UserPass?: StringFilter<"users"> | string
    UserEmail?: StringNullableFilter<"users"> | string | null
    UserTypeID?: IntFilter<"users"> | number
    librarian?: LibrarianListRelationFilter
    patron?: PatronListRelationFilter
    user_type?: XOR<User_typeScalarRelationFilter, user_typeWhereInput>
  }

  export type usersOrderByWithRelationInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    UserPass?: SortOrder
    UserEmail?: SortOrderInput | SortOrder
    UserTypeID?: SortOrder
    librarian?: librarianOrderByRelationAggregateInput
    patron?: patronOrderByRelationAggregateInput
    user_type?: user_typeOrderByWithRelationInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    UserID?: number
    UserName?: string
    UserEmail?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    UserPass?: StringFilter<"users"> | string
    UserTypeID?: IntFilter<"users"> | number
    librarian?: LibrarianListRelationFilter
    patron?: PatronListRelationFilter
    user_type?: XOR<User_typeScalarRelationFilter, user_typeWhereInput>
  }, "UserID" | "UserName" | "UserEmail">

  export type usersOrderByWithAggregationInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    UserPass?: SortOrder
    UserEmail?: SortOrderInput | SortOrder
    UserTypeID?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    UserID?: IntWithAggregatesFilter<"users"> | number
    UserName?: StringWithAggregatesFilter<"users"> | string
    UserPass?: StringWithAggregatesFilter<"users"> | string
    UserEmail?: StringNullableWithAggregatesFilter<"users"> | string | null
    UserTypeID?: IntWithAggregatesFilter<"users"> | number
  }

  export type itemCreateInput = {
    ItemTitle: string
    ItemAuthor?: string | null
    ItemType?: string | null
    ItemPrice?: Decimal | DecimalJsLike | number | string | null
    ItemImage?: string | null
    itemtransaction?: itemtransactionCreateNestedManyWithoutItemInput
  }

  export type itemUncheckedCreateInput = {
    ItemID?: number
    ItemTitle: string
    ItemAuthor?: string | null
    ItemType?: string | null
    ItemPrice?: Decimal | DecimalJsLike | number | string | null
    ItemImage?: string | null
    itemtransaction?: itemtransactionUncheckedCreateNestedManyWithoutItemInput
  }

  export type itemUpdateInput = {
    ItemTitle?: StringFieldUpdateOperationsInput | string
    ItemAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    ItemType?: NullableStringFieldUpdateOperationsInput | string | null
    ItemPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ItemImage?: NullableStringFieldUpdateOperationsInput | string | null
    itemtransaction?: itemtransactionUpdateManyWithoutItemNestedInput
  }

  export type itemUncheckedUpdateInput = {
    ItemID?: IntFieldUpdateOperationsInput | number
    ItemTitle?: StringFieldUpdateOperationsInput | string
    ItemAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    ItemType?: NullableStringFieldUpdateOperationsInput | string | null
    ItemPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ItemImage?: NullableStringFieldUpdateOperationsInput | string | null
    itemtransaction?: itemtransactionUncheckedUpdateManyWithoutItemNestedInput
  }

  export type itemCreateManyInput = {
    ItemID?: number
    ItemTitle: string
    ItemAuthor?: string | null
    ItemType?: string | null
    ItemPrice?: Decimal | DecimalJsLike | number | string | null
    ItemImage?: string | null
  }

  export type itemUpdateManyMutationInput = {
    ItemTitle?: StringFieldUpdateOperationsInput | string
    ItemAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    ItemType?: NullableStringFieldUpdateOperationsInput | string | null
    ItemPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ItemImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemUncheckedUpdateManyInput = {
    ItemID?: IntFieldUpdateOperationsInput | number
    ItemTitle?: StringFieldUpdateOperationsInput | string
    ItemAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    ItemType?: NullableStringFieldUpdateOperationsInput | string | null
    ItemPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ItemImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemtransactionCreateInput = {
    IsAvailable?: boolean | null
    IsVisible?: boolean | null
    patron?: patronCreateNestedOneWithoutItemtransactionInput
    item: itemCreateNestedOneWithoutItemtransactionInput
  }

  export type itemtransactionUncheckedCreateInput = {
    ItemTranID?: number
    ItemID: number
    IsAvailable?: boolean | null
    ItemAssignedTo?: number | null
    IsVisible?: boolean | null
  }

  export type itemtransactionUpdateInput = {
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    patron?: patronUpdateOneWithoutItemtransactionNestedInput
    item?: itemUpdateOneRequiredWithoutItemtransactionNestedInput
  }

  export type itemtransactionUncheckedUpdateInput = {
    ItemTranID?: IntFieldUpdateOperationsInput | number
    ItemID?: IntFieldUpdateOperationsInput | number
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ItemAssignedTo?: NullableIntFieldUpdateOperationsInput | number | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type itemtransactionCreateManyInput = {
    ItemTranID?: number
    ItemID: number
    IsAvailable?: boolean | null
    ItemAssignedTo?: number | null
    IsVisible?: boolean | null
  }

  export type itemtransactionUpdateManyMutationInput = {
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type itemtransactionUncheckedUpdateManyInput = {
    ItemTranID?: IntFieldUpdateOperationsInput | number
    ItemID?: IntFieldUpdateOperationsInput | number
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ItemAssignedTo?: NullableIntFieldUpdateOperationsInput | number | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type librarianCreateInput = {
    LibrarianName: string
    users?: usersCreateNestedOneWithoutLibrarianInput
  }

  export type librarianUncheckedCreateInput = {
    LibrarianID?: number
    LibrarianName: string
    UserID?: number | null
  }

  export type librarianUpdateInput = {
    LibrarianName?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneWithoutLibrarianNestedInput
  }

  export type librarianUncheckedUpdateInput = {
    LibrarianID?: IntFieldUpdateOperationsInput | number
    LibrarianName?: StringFieldUpdateOperationsInput | string
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type librarianCreateManyInput = {
    LibrarianID?: number
    LibrarianName: string
    UserID?: number | null
  }

  export type librarianUpdateManyMutationInput = {
    LibrarianName?: StringFieldUpdateOperationsInput | string
  }

  export type librarianUncheckedUpdateManyInput = {
    LibrarianID?: IntFieldUpdateOperationsInput | number
    LibrarianName?: StringFieldUpdateOperationsInput | string
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type patronCreateInput = {
    PatronFirstName: string
    PatronMiddleName?: string | null
    PatronLastName: string
    PatronDepartment?: string | null
    PatronSemester?: string | null
    PatronRollNo?: string | null
    PatronEnrollmentNumber?: string | null
    PatronImage?: string | null
    itemtransaction?: itemtransactionCreateNestedManyWithoutPatronInput
    users?: usersCreateNestedOneWithoutPatronInput
  }

  export type patronUncheckedCreateInput = {
    PatronID?: number
    PatronFirstName: string
    PatronMiddleName?: string | null
    PatronLastName: string
    PatronDepartment?: string | null
    PatronSemester?: string | null
    PatronRollNo?: string | null
    PatronEnrollmentNumber?: string | null
    PatronImage?: string | null
    UserID?: number | null
    itemtransaction?: itemtransactionUncheckedCreateNestedManyWithoutPatronInput
  }

  export type patronUpdateInput = {
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
    itemtransaction?: itemtransactionUpdateManyWithoutPatronNestedInput
    users?: usersUpdateOneWithoutPatronNestedInput
  }

  export type patronUncheckedUpdateInput = {
    PatronID?: IntFieldUpdateOperationsInput | number
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
    itemtransaction?: itemtransactionUncheckedUpdateManyWithoutPatronNestedInput
  }

  export type patronCreateManyInput = {
    PatronID?: number
    PatronFirstName: string
    PatronMiddleName?: string | null
    PatronLastName: string
    PatronDepartment?: string | null
    PatronSemester?: string | null
    PatronRollNo?: string | null
    PatronEnrollmentNumber?: string | null
    PatronImage?: string | null
    UserID?: number | null
  }

  export type patronUpdateManyMutationInput = {
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type patronUncheckedUpdateManyInput = {
    PatronID?: IntFieldUpdateOperationsInput | number
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type user_typeCreateInput = {
    UserTypeName: string
    IsLibrarian?: boolean | null
    IsAdmin?: boolean | null
    IsStudent?: boolean | null
    users?: usersCreateNestedManyWithoutUser_typeInput
  }

  export type user_typeUncheckedCreateInput = {
    UserTypeID?: number
    UserTypeName: string
    IsLibrarian?: boolean | null
    IsAdmin?: boolean | null
    IsStudent?: boolean | null
    users?: usersUncheckedCreateNestedManyWithoutUser_typeInput
  }

  export type user_typeUpdateInput = {
    UserTypeName?: StringFieldUpdateOperationsInput | string
    IsLibrarian?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsStudent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateManyWithoutUser_typeNestedInput
  }

  export type user_typeUncheckedUpdateInput = {
    UserTypeID?: IntFieldUpdateOperationsInput | number
    UserTypeName?: StringFieldUpdateOperationsInput | string
    IsLibrarian?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsStudent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUncheckedUpdateManyWithoutUser_typeNestedInput
  }

  export type user_typeCreateManyInput = {
    UserTypeID?: number
    UserTypeName: string
    IsLibrarian?: boolean | null
    IsAdmin?: boolean | null
    IsStudent?: boolean | null
  }

  export type user_typeUpdateManyMutationInput = {
    UserTypeName?: StringFieldUpdateOperationsInput | string
    IsLibrarian?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsStudent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_typeUncheckedUpdateManyInput = {
    UserTypeID?: IntFieldUpdateOperationsInput | number
    UserTypeName?: StringFieldUpdateOperationsInput | string
    IsLibrarian?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsStudent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersCreateInput = {
    UserName: string
    UserPass: string
    UserEmail?: string | null
    librarian?: librarianCreateNestedManyWithoutUsersInput
    patron?: patronCreateNestedManyWithoutUsersInput
    user_type: user_typeCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    UserID?: number
    UserName: string
    UserPass: string
    UserEmail?: string | null
    UserTypeID: number
    librarian?: librarianUncheckedCreateNestedManyWithoutUsersInput
    patron?: patronUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    librarian?: librarianUpdateManyWithoutUsersNestedInput
    patron?: patronUpdateManyWithoutUsersNestedInput
    user_type?: user_typeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    UserTypeID?: IntFieldUpdateOperationsInput | number
    librarian?: librarianUncheckedUpdateManyWithoutUsersNestedInput
    patron?: patronUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    UserID?: number
    UserName: string
    UserPass: string
    UserEmail?: string | null
    UserTypeID: number
  }

  export type usersUpdateManyMutationInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    UserTypeID?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ItemtransactionListRelationFilter = {
    every?: itemtransactionWhereInput
    some?: itemtransactionWhereInput
    none?: itemtransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type itemtransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type itemCountOrderByAggregateInput = {
    ItemID?: SortOrder
    ItemTitle?: SortOrder
    ItemAuthor?: SortOrder
    ItemType?: SortOrder
    ItemPrice?: SortOrder
    ItemImage?: SortOrder
  }

  export type itemAvgOrderByAggregateInput = {
    ItemID?: SortOrder
    ItemPrice?: SortOrder
  }

  export type itemMaxOrderByAggregateInput = {
    ItemID?: SortOrder
    ItemTitle?: SortOrder
    ItemAuthor?: SortOrder
    ItemType?: SortOrder
    ItemPrice?: SortOrder
    ItemImage?: SortOrder
  }

  export type itemMinOrderByAggregateInput = {
    ItemID?: SortOrder
    ItemTitle?: SortOrder
    ItemAuthor?: SortOrder
    ItemType?: SortOrder
    ItemPrice?: SortOrder
    ItemImage?: SortOrder
  }

  export type itemSumOrderByAggregateInput = {
    ItemID?: SortOrder
    ItemPrice?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PatronNullableScalarRelationFilter = {
    is?: patronWhereInput | null
    isNot?: patronWhereInput | null
  }

  export type ItemScalarRelationFilter = {
    is?: itemWhereInput
    isNot?: itemWhereInput
  }

  export type itemtransactionCountOrderByAggregateInput = {
    ItemTranID?: SortOrder
    ItemID?: SortOrder
    IsAvailable?: SortOrder
    ItemAssignedTo?: SortOrder
    IsVisible?: SortOrder
  }

  export type itemtransactionAvgOrderByAggregateInput = {
    ItemTranID?: SortOrder
    ItemID?: SortOrder
    ItemAssignedTo?: SortOrder
  }

  export type itemtransactionMaxOrderByAggregateInput = {
    ItemTranID?: SortOrder
    ItemID?: SortOrder
    IsAvailable?: SortOrder
    ItemAssignedTo?: SortOrder
    IsVisible?: SortOrder
  }

  export type itemtransactionMinOrderByAggregateInput = {
    ItemTranID?: SortOrder
    ItemID?: SortOrder
    IsAvailable?: SortOrder
    ItemAssignedTo?: SortOrder
    IsVisible?: SortOrder
  }

  export type itemtransactionSumOrderByAggregateInput = {
    ItemTranID?: SortOrder
    ItemID?: SortOrder
    ItemAssignedTo?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type librarianCountOrderByAggregateInput = {
    LibrarianID?: SortOrder
    LibrarianName?: SortOrder
    UserID?: SortOrder
  }

  export type librarianAvgOrderByAggregateInput = {
    LibrarianID?: SortOrder
    UserID?: SortOrder
  }

  export type librarianMaxOrderByAggregateInput = {
    LibrarianID?: SortOrder
    LibrarianName?: SortOrder
    UserID?: SortOrder
  }

  export type librarianMinOrderByAggregateInput = {
    LibrarianID?: SortOrder
    LibrarianName?: SortOrder
    UserID?: SortOrder
  }

  export type librarianSumOrderByAggregateInput = {
    LibrarianID?: SortOrder
    UserID?: SortOrder
  }

  export type patronCountOrderByAggregateInput = {
    PatronID?: SortOrder
    PatronFirstName?: SortOrder
    PatronMiddleName?: SortOrder
    PatronLastName?: SortOrder
    PatronDepartment?: SortOrder
    PatronSemester?: SortOrder
    PatronRollNo?: SortOrder
    PatronEnrollmentNumber?: SortOrder
    PatronImage?: SortOrder
    UserID?: SortOrder
  }

  export type patronAvgOrderByAggregateInput = {
    PatronID?: SortOrder
    UserID?: SortOrder
  }

  export type patronMaxOrderByAggregateInput = {
    PatronID?: SortOrder
    PatronFirstName?: SortOrder
    PatronMiddleName?: SortOrder
    PatronLastName?: SortOrder
    PatronDepartment?: SortOrder
    PatronSemester?: SortOrder
    PatronRollNo?: SortOrder
    PatronEnrollmentNumber?: SortOrder
    PatronImage?: SortOrder
    UserID?: SortOrder
  }

  export type patronMinOrderByAggregateInput = {
    PatronID?: SortOrder
    PatronFirstName?: SortOrder
    PatronMiddleName?: SortOrder
    PatronLastName?: SortOrder
    PatronDepartment?: SortOrder
    PatronSemester?: SortOrder
    PatronRollNo?: SortOrder
    PatronEnrollmentNumber?: SortOrder
    PatronImage?: SortOrder
    UserID?: SortOrder
  }

  export type patronSumOrderByAggregateInput = {
    PatronID?: SortOrder
    UserID?: SortOrder
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_typeCountOrderByAggregateInput = {
    UserTypeID?: SortOrder
    UserTypeName?: SortOrder
    IsLibrarian?: SortOrder
    IsAdmin?: SortOrder
    IsStudent?: SortOrder
  }

  export type user_typeAvgOrderByAggregateInput = {
    UserTypeID?: SortOrder
  }

  export type user_typeMaxOrderByAggregateInput = {
    UserTypeID?: SortOrder
    UserTypeName?: SortOrder
    IsLibrarian?: SortOrder
    IsAdmin?: SortOrder
    IsStudent?: SortOrder
  }

  export type user_typeMinOrderByAggregateInput = {
    UserTypeID?: SortOrder
    UserTypeName?: SortOrder
    IsLibrarian?: SortOrder
    IsAdmin?: SortOrder
    IsStudent?: SortOrder
  }

  export type user_typeSumOrderByAggregateInput = {
    UserTypeID?: SortOrder
  }

  export type LibrarianListRelationFilter = {
    every?: librarianWhereInput
    some?: librarianWhereInput
    none?: librarianWhereInput
  }

  export type PatronListRelationFilter = {
    every?: patronWhereInput
    some?: patronWhereInput
    none?: patronWhereInput
  }

  export type User_typeScalarRelationFilter = {
    is?: user_typeWhereInput
    isNot?: user_typeWhereInput
  }

  export type librarianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type patronOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    UserPass?: SortOrder
    UserEmail?: SortOrder
    UserTypeID?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    UserID?: SortOrder
    UserTypeID?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    UserPass?: SortOrder
    UserEmail?: SortOrder
    UserTypeID?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    UserID?: SortOrder
    UserName?: SortOrder
    UserPass?: SortOrder
    UserEmail?: SortOrder
    UserTypeID?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    UserID?: SortOrder
    UserTypeID?: SortOrder
  }

  export type itemtransactionCreateNestedManyWithoutItemInput = {
    create?: XOR<itemtransactionCreateWithoutItemInput, itemtransactionUncheckedCreateWithoutItemInput> | itemtransactionCreateWithoutItemInput[] | itemtransactionUncheckedCreateWithoutItemInput[]
    connectOrCreate?: itemtransactionCreateOrConnectWithoutItemInput | itemtransactionCreateOrConnectWithoutItemInput[]
    createMany?: itemtransactionCreateManyItemInputEnvelope
    connect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
  }

  export type itemtransactionUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<itemtransactionCreateWithoutItemInput, itemtransactionUncheckedCreateWithoutItemInput> | itemtransactionCreateWithoutItemInput[] | itemtransactionUncheckedCreateWithoutItemInput[]
    connectOrCreate?: itemtransactionCreateOrConnectWithoutItemInput | itemtransactionCreateOrConnectWithoutItemInput[]
    createMany?: itemtransactionCreateManyItemInputEnvelope
    connect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type itemtransactionUpdateManyWithoutItemNestedInput = {
    create?: XOR<itemtransactionCreateWithoutItemInput, itemtransactionUncheckedCreateWithoutItemInput> | itemtransactionCreateWithoutItemInput[] | itemtransactionUncheckedCreateWithoutItemInput[]
    connectOrCreate?: itemtransactionCreateOrConnectWithoutItemInput | itemtransactionCreateOrConnectWithoutItemInput[]
    upsert?: itemtransactionUpsertWithWhereUniqueWithoutItemInput | itemtransactionUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: itemtransactionCreateManyItemInputEnvelope
    set?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    disconnect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    delete?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    connect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    update?: itemtransactionUpdateWithWhereUniqueWithoutItemInput | itemtransactionUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: itemtransactionUpdateManyWithWhereWithoutItemInput | itemtransactionUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: itemtransactionScalarWhereInput | itemtransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type itemtransactionUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<itemtransactionCreateWithoutItemInput, itemtransactionUncheckedCreateWithoutItemInput> | itemtransactionCreateWithoutItemInput[] | itemtransactionUncheckedCreateWithoutItemInput[]
    connectOrCreate?: itemtransactionCreateOrConnectWithoutItemInput | itemtransactionCreateOrConnectWithoutItemInput[]
    upsert?: itemtransactionUpsertWithWhereUniqueWithoutItemInput | itemtransactionUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: itemtransactionCreateManyItemInputEnvelope
    set?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    disconnect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    delete?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    connect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    update?: itemtransactionUpdateWithWhereUniqueWithoutItemInput | itemtransactionUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: itemtransactionUpdateManyWithWhereWithoutItemInput | itemtransactionUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: itemtransactionScalarWhereInput | itemtransactionScalarWhereInput[]
  }

  export type patronCreateNestedOneWithoutItemtransactionInput = {
    create?: XOR<patronCreateWithoutItemtransactionInput, patronUncheckedCreateWithoutItemtransactionInput>
    connectOrCreate?: patronCreateOrConnectWithoutItemtransactionInput
    connect?: patronWhereUniqueInput
  }

  export type itemCreateNestedOneWithoutItemtransactionInput = {
    create?: XOR<itemCreateWithoutItemtransactionInput, itemUncheckedCreateWithoutItemtransactionInput>
    connectOrCreate?: itemCreateOrConnectWithoutItemtransactionInput
    connect?: itemWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type patronUpdateOneWithoutItemtransactionNestedInput = {
    create?: XOR<patronCreateWithoutItemtransactionInput, patronUncheckedCreateWithoutItemtransactionInput>
    connectOrCreate?: patronCreateOrConnectWithoutItemtransactionInput
    upsert?: patronUpsertWithoutItemtransactionInput
    disconnect?: patronWhereInput | boolean
    delete?: patronWhereInput | boolean
    connect?: patronWhereUniqueInput
    update?: XOR<XOR<patronUpdateToOneWithWhereWithoutItemtransactionInput, patronUpdateWithoutItemtransactionInput>, patronUncheckedUpdateWithoutItemtransactionInput>
  }

  export type itemUpdateOneRequiredWithoutItemtransactionNestedInput = {
    create?: XOR<itemCreateWithoutItemtransactionInput, itemUncheckedCreateWithoutItemtransactionInput>
    connectOrCreate?: itemCreateOrConnectWithoutItemtransactionInput
    upsert?: itemUpsertWithoutItemtransactionInput
    connect?: itemWhereUniqueInput
    update?: XOR<XOR<itemUpdateToOneWithWhereWithoutItemtransactionInput, itemUpdateWithoutItemtransactionInput>, itemUncheckedUpdateWithoutItemtransactionInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutLibrarianInput = {
    create?: XOR<usersCreateWithoutLibrarianInput, usersUncheckedCreateWithoutLibrarianInput>
    connectOrCreate?: usersCreateOrConnectWithoutLibrarianInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneWithoutLibrarianNestedInput = {
    create?: XOR<usersCreateWithoutLibrarianInput, usersUncheckedCreateWithoutLibrarianInput>
    connectOrCreate?: usersCreateOrConnectWithoutLibrarianInput
    upsert?: usersUpsertWithoutLibrarianInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLibrarianInput, usersUpdateWithoutLibrarianInput>, usersUncheckedUpdateWithoutLibrarianInput>
  }

  export type itemtransactionCreateNestedManyWithoutPatronInput = {
    create?: XOR<itemtransactionCreateWithoutPatronInput, itemtransactionUncheckedCreateWithoutPatronInput> | itemtransactionCreateWithoutPatronInput[] | itemtransactionUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: itemtransactionCreateOrConnectWithoutPatronInput | itemtransactionCreateOrConnectWithoutPatronInput[]
    createMany?: itemtransactionCreateManyPatronInputEnvelope
    connect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPatronInput = {
    create?: XOR<usersCreateWithoutPatronInput, usersUncheckedCreateWithoutPatronInput>
    connectOrCreate?: usersCreateOrConnectWithoutPatronInput
    connect?: usersWhereUniqueInput
  }

  export type itemtransactionUncheckedCreateNestedManyWithoutPatronInput = {
    create?: XOR<itemtransactionCreateWithoutPatronInput, itemtransactionUncheckedCreateWithoutPatronInput> | itemtransactionCreateWithoutPatronInput[] | itemtransactionUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: itemtransactionCreateOrConnectWithoutPatronInput | itemtransactionCreateOrConnectWithoutPatronInput[]
    createMany?: itemtransactionCreateManyPatronInputEnvelope
    connect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
  }

  export type itemtransactionUpdateManyWithoutPatronNestedInput = {
    create?: XOR<itemtransactionCreateWithoutPatronInput, itemtransactionUncheckedCreateWithoutPatronInput> | itemtransactionCreateWithoutPatronInput[] | itemtransactionUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: itemtransactionCreateOrConnectWithoutPatronInput | itemtransactionCreateOrConnectWithoutPatronInput[]
    upsert?: itemtransactionUpsertWithWhereUniqueWithoutPatronInput | itemtransactionUpsertWithWhereUniqueWithoutPatronInput[]
    createMany?: itemtransactionCreateManyPatronInputEnvelope
    set?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    disconnect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    delete?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    connect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    update?: itemtransactionUpdateWithWhereUniqueWithoutPatronInput | itemtransactionUpdateWithWhereUniqueWithoutPatronInput[]
    updateMany?: itemtransactionUpdateManyWithWhereWithoutPatronInput | itemtransactionUpdateManyWithWhereWithoutPatronInput[]
    deleteMany?: itemtransactionScalarWhereInput | itemtransactionScalarWhereInput[]
  }

  export type usersUpdateOneWithoutPatronNestedInput = {
    create?: XOR<usersCreateWithoutPatronInput, usersUncheckedCreateWithoutPatronInput>
    connectOrCreate?: usersCreateOrConnectWithoutPatronInput
    upsert?: usersUpsertWithoutPatronInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPatronInput, usersUpdateWithoutPatronInput>, usersUncheckedUpdateWithoutPatronInput>
  }

  export type itemtransactionUncheckedUpdateManyWithoutPatronNestedInput = {
    create?: XOR<itemtransactionCreateWithoutPatronInput, itemtransactionUncheckedCreateWithoutPatronInput> | itemtransactionCreateWithoutPatronInput[] | itemtransactionUncheckedCreateWithoutPatronInput[]
    connectOrCreate?: itemtransactionCreateOrConnectWithoutPatronInput | itemtransactionCreateOrConnectWithoutPatronInput[]
    upsert?: itemtransactionUpsertWithWhereUniqueWithoutPatronInput | itemtransactionUpsertWithWhereUniqueWithoutPatronInput[]
    createMany?: itemtransactionCreateManyPatronInputEnvelope
    set?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    disconnect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    delete?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    connect?: itemtransactionWhereUniqueInput | itemtransactionWhereUniqueInput[]
    update?: itemtransactionUpdateWithWhereUniqueWithoutPatronInput | itemtransactionUpdateWithWhereUniqueWithoutPatronInput[]
    updateMany?: itemtransactionUpdateManyWithWhereWithoutPatronInput | itemtransactionUpdateManyWithWhereWithoutPatronInput[]
    deleteMany?: itemtransactionScalarWhereInput | itemtransactionScalarWhereInput[]
  }

  export type usersCreateNestedManyWithoutUser_typeInput = {
    create?: XOR<usersCreateWithoutUser_typeInput, usersUncheckedCreateWithoutUser_typeInput> | usersCreateWithoutUser_typeInput[] | usersUncheckedCreateWithoutUser_typeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUser_typeInput | usersCreateOrConnectWithoutUser_typeInput[]
    createMany?: usersCreateManyUser_typeInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutUser_typeInput = {
    create?: XOR<usersCreateWithoutUser_typeInput, usersUncheckedCreateWithoutUser_typeInput> | usersCreateWithoutUser_typeInput[] | usersUncheckedCreateWithoutUser_typeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUser_typeInput | usersCreateOrConnectWithoutUser_typeInput[]
    createMany?: usersCreateManyUser_typeInputEnvelope
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutUser_typeNestedInput = {
    create?: XOR<usersCreateWithoutUser_typeInput, usersUncheckedCreateWithoutUser_typeInput> | usersCreateWithoutUser_typeInput[] | usersUncheckedCreateWithoutUser_typeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUser_typeInput | usersCreateOrConnectWithoutUser_typeInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUser_typeInput | usersUpsertWithWhereUniqueWithoutUser_typeInput[]
    createMany?: usersCreateManyUser_typeInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUser_typeInput | usersUpdateWithWhereUniqueWithoutUser_typeInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUser_typeInput | usersUpdateManyWithWhereWithoutUser_typeInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutUser_typeNestedInput = {
    create?: XOR<usersCreateWithoutUser_typeInput, usersUncheckedCreateWithoutUser_typeInput> | usersCreateWithoutUser_typeInput[] | usersUncheckedCreateWithoutUser_typeInput[]
    connectOrCreate?: usersCreateOrConnectWithoutUser_typeInput | usersCreateOrConnectWithoutUser_typeInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutUser_typeInput | usersUpsertWithWhereUniqueWithoutUser_typeInput[]
    createMany?: usersCreateManyUser_typeInputEnvelope
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutUser_typeInput | usersUpdateWithWhereUniqueWithoutUser_typeInput[]
    updateMany?: usersUpdateManyWithWhereWithoutUser_typeInput | usersUpdateManyWithWhereWithoutUser_typeInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type librarianCreateNestedManyWithoutUsersInput = {
    create?: XOR<librarianCreateWithoutUsersInput, librarianUncheckedCreateWithoutUsersInput> | librarianCreateWithoutUsersInput[] | librarianUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: librarianCreateOrConnectWithoutUsersInput | librarianCreateOrConnectWithoutUsersInput[]
    createMany?: librarianCreateManyUsersInputEnvelope
    connect?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
  }

  export type patronCreateNestedManyWithoutUsersInput = {
    create?: XOR<patronCreateWithoutUsersInput, patronUncheckedCreateWithoutUsersInput> | patronCreateWithoutUsersInput[] | patronUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: patronCreateOrConnectWithoutUsersInput | patronCreateOrConnectWithoutUsersInput[]
    createMany?: patronCreateManyUsersInputEnvelope
    connect?: patronWhereUniqueInput | patronWhereUniqueInput[]
  }

  export type user_typeCreateNestedOneWithoutUsersInput = {
    create?: XOR<user_typeCreateWithoutUsersInput, user_typeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_typeCreateOrConnectWithoutUsersInput
    connect?: user_typeWhereUniqueInput
  }

  export type librarianUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<librarianCreateWithoutUsersInput, librarianUncheckedCreateWithoutUsersInput> | librarianCreateWithoutUsersInput[] | librarianUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: librarianCreateOrConnectWithoutUsersInput | librarianCreateOrConnectWithoutUsersInput[]
    createMany?: librarianCreateManyUsersInputEnvelope
    connect?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
  }

  export type patronUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<patronCreateWithoutUsersInput, patronUncheckedCreateWithoutUsersInput> | patronCreateWithoutUsersInput[] | patronUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: patronCreateOrConnectWithoutUsersInput | patronCreateOrConnectWithoutUsersInput[]
    createMany?: patronCreateManyUsersInputEnvelope
    connect?: patronWhereUniqueInput | patronWhereUniqueInput[]
  }

  export type librarianUpdateManyWithoutUsersNestedInput = {
    create?: XOR<librarianCreateWithoutUsersInput, librarianUncheckedCreateWithoutUsersInput> | librarianCreateWithoutUsersInput[] | librarianUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: librarianCreateOrConnectWithoutUsersInput | librarianCreateOrConnectWithoutUsersInput[]
    upsert?: librarianUpsertWithWhereUniqueWithoutUsersInput | librarianUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: librarianCreateManyUsersInputEnvelope
    set?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
    disconnect?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
    delete?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
    connect?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
    update?: librarianUpdateWithWhereUniqueWithoutUsersInput | librarianUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: librarianUpdateManyWithWhereWithoutUsersInput | librarianUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: librarianScalarWhereInput | librarianScalarWhereInput[]
  }

  export type patronUpdateManyWithoutUsersNestedInput = {
    create?: XOR<patronCreateWithoutUsersInput, patronUncheckedCreateWithoutUsersInput> | patronCreateWithoutUsersInput[] | patronUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: patronCreateOrConnectWithoutUsersInput | patronCreateOrConnectWithoutUsersInput[]
    upsert?: patronUpsertWithWhereUniqueWithoutUsersInput | patronUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: patronCreateManyUsersInputEnvelope
    set?: patronWhereUniqueInput | patronWhereUniqueInput[]
    disconnect?: patronWhereUniqueInput | patronWhereUniqueInput[]
    delete?: patronWhereUniqueInput | patronWhereUniqueInput[]
    connect?: patronWhereUniqueInput | patronWhereUniqueInput[]
    update?: patronUpdateWithWhereUniqueWithoutUsersInput | patronUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: patronUpdateManyWithWhereWithoutUsersInput | patronUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: patronScalarWhereInput | patronScalarWhereInput[]
  }

  export type user_typeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<user_typeCreateWithoutUsersInput, user_typeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: user_typeCreateOrConnectWithoutUsersInput
    upsert?: user_typeUpsertWithoutUsersInput
    connect?: user_typeWhereUniqueInput
    update?: XOR<XOR<user_typeUpdateToOneWithWhereWithoutUsersInput, user_typeUpdateWithoutUsersInput>, user_typeUncheckedUpdateWithoutUsersInput>
  }

  export type librarianUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<librarianCreateWithoutUsersInput, librarianUncheckedCreateWithoutUsersInput> | librarianCreateWithoutUsersInput[] | librarianUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: librarianCreateOrConnectWithoutUsersInput | librarianCreateOrConnectWithoutUsersInput[]
    upsert?: librarianUpsertWithWhereUniqueWithoutUsersInput | librarianUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: librarianCreateManyUsersInputEnvelope
    set?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
    disconnect?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
    delete?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
    connect?: librarianWhereUniqueInput | librarianWhereUniqueInput[]
    update?: librarianUpdateWithWhereUniqueWithoutUsersInput | librarianUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: librarianUpdateManyWithWhereWithoutUsersInput | librarianUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: librarianScalarWhereInput | librarianScalarWhereInput[]
  }

  export type patronUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<patronCreateWithoutUsersInput, patronUncheckedCreateWithoutUsersInput> | patronCreateWithoutUsersInput[] | patronUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: patronCreateOrConnectWithoutUsersInput | patronCreateOrConnectWithoutUsersInput[]
    upsert?: patronUpsertWithWhereUniqueWithoutUsersInput | patronUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: patronCreateManyUsersInputEnvelope
    set?: patronWhereUniqueInput | patronWhereUniqueInput[]
    disconnect?: patronWhereUniqueInput | patronWhereUniqueInput[]
    delete?: patronWhereUniqueInput | patronWhereUniqueInput[]
    connect?: patronWhereUniqueInput | patronWhereUniqueInput[]
    update?: patronUpdateWithWhereUniqueWithoutUsersInput | patronUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: patronUpdateManyWithWhereWithoutUsersInput | patronUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: patronScalarWhereInput | patronScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type itemtransactionCreateWithoutItemInput = {
    IsAvailable?: boolean | null
    IsVisible?: boolean | null
    patron?: patronCreateNestedOneWithoutItemtransactionInput
  }

  export type itemtransactionUncheckedCreateWithoutItemInput = {
    ItemTranID?: number
    IsAvailable?: boolean | null
    ItemAssignedTo?: number | null
    IsVisible?: boolean | null
  }

  export type itemtransactionCreateOrConnectWithoutItemInput = {
    where: itemtransactionWhereUniqueInput
    create: XOR<itemtransactionCreateWithoutItemInput, itemtransactionUncheckedCreateWithoutItemInput>
  }

  export type itemtransactionCreateManyItemInputEnvelope = {
    data: itemtransactionCreateManyItemInput | itemtransactionCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type itemtransactionUpsertWithWhereUniqueWithoutItemInput = {
    where: itemtransactionWhereUniqueInput
    update: XOR<itemtransactionUpdateWithoutItemInput, itemtransactionUncheckedUpdateWithoutItemInput>
    create: XOR<itemtransactionCreateWithoutItemInput, itemtransactionUncheckedCreateWithoutItemInput>
  }

  export type itemtransactionUpdateWithWhereUniqueWithoutItemInput = {
    where: itemtransactionWhereUniqueInput
    data: XOR<itemtransactionUpdateWithoutItemInput, itemtransactionUncheckedUpdateWithoutItemInput>
  }

  export type itemtransactionUpdateManyWithWhereWithoutItemInput = {
    where: itemtransactionScalarWhereInput
    data: XOR<itemtransactionUpdateManyMutationInput, itemtransactionUncheckedUpdateManyWithoutItemInput>
  }

  export type itemtransactionScalarWhereInput = {
    AND?: itemtransactionScalarWhereInput | itemtransactionScalarWhereInput[]
    OR?: itemtransactionScalarWhereInput[]
    NOT?: itemtransactionScalarWhereInput | itemtransactionScalarWhereInput[]
    ItemTranID?: IntFilter<"itemtransaction"> | number
    ItemID?: IntFilter<"itemtransaction"> | number
    IsAvailable?: BoolNullableFilter<"itemtransaction"> | boolean | null
    ItemAssignedTo?: IntNullableFilter<"itemtransaction"> | number | null
    IsVisible?: BoolNullableFilter<"itemtransaction"> | boolean | null
  }

  export type patronCreateWithoutItemtransactionInput = {
    PatronFirstName: string
    PatronMiddleName?: string | null
    PatronLastName: string
    PatronDepartment?: string | null
    PatronSemester?: string | null
    PatronRollNo?: string | null
    PatronEnrollmentNumber?: string | null
    PatronImage?: string | null
    users?: usersCreateNestedOneWithoutPatronInput
  }

  export type patronUncheckedCreateWithoutItemtransactionInput = {
    PatronID?: number
    PatronFirstName: string
    PatronMiddleName?: string | null
    PatronLastName: string
    PatronDepartment?: string | null
    PatronSemester?: string | null
    PatronRollNo?: string | null
    PatronEnrollmentNumber?: string | null
    PatronImage?: string | null
    UserID?: number | null
  }

  export type patronCreateOrConnectWithoutItemtransactionInput = {
    where: patronWhereUniqueInput
    create: XOR<patronCreateWithoutItemtransactionInput, patronUncheckedCreateWithoutItemtransactionInput>
  }

  export type itemCreateWithoutItemtransactionInput = {
    ItemTitle: string
    ItemAuthor?: string | null
    ItemType?: string | null
    ItemPrice?: Decimal | DecimalJsLike | number | string | null
    ItemImage?: string | null
  }

  export type itemUncheckedCreateWithoutItemtransactionInput = {
    ItemID?: number
    ItemTitle: string
    ItemAuthor?: string | null
    ItemType?: string | null
    ItemPrice?: Decimal | DecimalJsLike | number | string | null
    ItemImage?: string | null
  }

  export type itemCreateOrConnectWithoutItemtransactionInput = {
    where: itemWhereUniqueInput
    create: XOR<itemCreateWithoutItemtransactionInput, itemUncheckedCreateWithoutItemtransactionInput>
  }

  export type patronUpsertWithoutItemtransactionInput = {
    update: XOR<patronUpdateWithoutItemtransactionInput, patronUncheckedUpdateWithoutItemtransactionInput>
    create: XOR<patronCreateWithoutItemtransactionInput, patronUncheckedCreateWithoutItemtransactionInput>
    where?: patronWhereInput
  }

  export type patronUpdateToOneWithWhereWithoutItemtransactionInput = {
    where?: patronWhereInput
    data: XOR<patronUpdateWithoutItemtransactionInput, patronUncheckedUpdateWithoutItemtransactionInput>
  }

  export type patronUpdateWithoutItemtransactionInput = {
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutPatronNestedInput
  }

  export type patronUncheckedUpdateWithoutItemtransactionInput = {
    PatronID?: IntFieldUpdateOperationsInput | number
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
    UserID?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type itemUpsertWithoutItemtransactionInput = {
    update: XOR<itemUpdateWithoutItemtransactionInput, itemUncheckedUpdateWithoutItemtransactionInput>
    create: XOR<itemCreateWithoutItemtransactionInput, itemUncheckedCreateWithoutItemtransactionInput>
    where?: itemWhereInput
  }

  export type itemUpdateToOneWithWhereWithoutItemtransactionInput = {
    where?: itemWhereInput
    data: XOR<itemUpdateWithoutItemtransactionInput, itemUncheckedUpdateWithoutItemtransactionInput>
  }

  export type itemUpdateWithoutItemtransactionInput = {
    ItemTitle?: StringFieldUpdateOperationsInput | string
    ItemAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    ItemType?: NullableStringFieldUpdateOperationsInput | string | null
    ItemPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ItemImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type itemUncheckedUpdateWithoutItemtransactionInput = {
    ItemID?: IntFieldUpdateOperationsInput | number
    ItemTitle?: StringFieldUpdateOperationsInput | string
    ItemAuthor?: NullableStringFieldUpdateOperationsInput | string | null
    ItemType?: NullableStringFieldUpdateOperationsInput | string | null
    ItemPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    ItemImage?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateWithoutLibrarianInput = {
    UserName: string
    UserPass: string
    UserEmail?: string | null
    patron?: patronCreateNestedManyWithoutUsersInput
    user_type: user_typeCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutLibrarianInput = {
    UserID?: number
    UserName: string
    UserPass: string
    UserEmail?: string | null
    UserTypeID: number
    patron?: patronUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutLibrarianInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLibrarianInput, usersUncheckedCreateWithoutLibrarianInput>
  }

  export type usersUpsertWithoutLibrarianInput = {
    update: XOR<usersUpdateWithoutLibrarianInput, usersUncheckedUpdateWithoutLibrarianInput>
    create: XOR<usersCreateWithoutLibrarianInput, usersUncheckedCreateWithoutLibrarianInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLibrarianInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLibrarianInput, usersUncheckedUpdateWithoutLibrarianInput>
  }

  export type usersUpdateWithoutLibrarianInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patron?: patronUpdateManyWithoutUsersNestedInput
    user_type?: user_typeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutLibrarianInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    UserTypeID?: IntFieldUpdateOperationsInput | number
    patron?: patronUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type itemtransactionCreateWithoutPatronInput = {
    IsAvailable?: boolean | null
    IsVisible?: boolean | null
    item: itemCreateNestedOneWithoutItemtransactionInput
  }

  export type itemtransactionUncheckedCreateWithoutPatronInput = {
    ItemTranID?: number
    ItemID: number
    IsAvailable?: boolean | null
    IsVisible?: boolean | null
  }

  export type itemtransactionCreateOrConnectWithoutPatronInput = {
    where: itemtransactionWhereUniqueInput
    create: XOR<itemtransactionCreateWithoutPatronInput, itemtransactionUncheckedCreateWithoutPatronInput>
  }

  export type itemtransactionCreateManyPatronInputEnvelope = {
    data: itemtransactionCreateManyPatronInput | itemtransactionCreateManyPatronInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPatronInput = {
    UserName: string
    UserPass: string
    UserEmail?: string | null
    librarian?: librarianCreateNestedManyWithoutUsersInput
    user_type: user_typeCreateNestedOneWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutPatronInput = {
    UserID?: number
    UserName: string
    UserPass: string
    UserEmail?: string | null
    UserTypeID: number
    librarian?: librarianUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutPatronInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPatronInput, usersUncheckedCreateWithoutPatronInput>
  }

  export type itemtransactionUpsertWithWhereUniqueWithoutPatronInput = {
    where: itemtransactionWhereUniqueInput
    update: XOR<itemtransactionUpdateWithoutPatronInput, itemtransactionUncheckedUpdateWithoutPatronInput>
    create: XOR<itemtransactionCreateWithoutPatronInput, itemtransactionUncheckedCreateWithoutPatronInput>
  }

  export type itemtransactionUpdateWithWhereUniqueWithoutPatronInput = {
    where: itemtransactionWhereUniqueInput
    data: XOR<itemtransactionUpdateWithoutPatronInput, itemtransactionUncheckedUpdateWithoutPatronInput>
  }

  export type itemtransactionUpdateManyWithWhereWithoutPatronInput = {
    where: itemtransactionScalarWhereInput
    data: XOR<itemtransactionUpdateManyMutationInput, itemtransactionUncheckedUpdateManyWithoutPatronInput>
  }

  export type usersUpsertWithoutPatronInput = {
    update: XOR<usersUpdateWithoutPatronInput, usersUncheckedUpdateWithoutPatronInput>
    create: XOR<usersCreateWithoutPatronInput, usersUncheckedCreateWithoutPatronInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPatronInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPatronInput, usersUncheckedUpdateWithoutPatronInput>
  }

  export type usersUpdateWithoutPatronInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    librarian?: librarianUpdateManyWithoutUsersNestedInput
    user_type?: user_typeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutPatronInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    UserTypeID?: IntFieldUpdateOperationsInput | number
    librarian?: librarianUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutUser_typeInput = {
    UserName: string
    UserPass: string
    UserEmail?: string | null
    librarian?: librarianCreateNestedManyWithoutUsersInput
    patron?: patronCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_typeInput = {
    UserID?: number
    UserName: string
    UserPass: string
    UserEmail?: string | null
    librarian?: librarianUncheckedCreateNestedManyWithoutUsersInput
    patron?: patronUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_typeInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_typeInput, usersUncheckedCreateWithoutUser_typeInput>
  }

  export type usersCreateManyUser_typeInputEnvelope = {
    data: usersCreateManyUser_typeInput | usersCreateManyUser_typeInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutUser_typeInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutUser_typeInput, usersUncheckedUpdateWithoutUser_typeInput>
    create: XOR<usersCreateWithoutUser_typeInput, usersUncheckedCreateWithoutUser_typeInput>
  }

  export type usersUpdateWithWhereUniqueWithoutUser_typeInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutUser_typeInput, usersUncheckedUpdateWithoutUser_typeInput>
  }

  export type usersUpdateManyWithWhereWithoutUser_typeInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutUser_typeInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    UserID?: IntFilter<"users"> | number
    UserName?: StringFilter<"users"> | string
    UserPass?: StringFilter<"users"> | string
    UserEmail?: StringNullableFilter<"users"> | string | null
    UserTypeID?: IntFilter<"users"> | number
  }

  export type librarianCreateWithoutUsersInput = {
    LibrarianName: string
  }

  export type librarianUncheckedCreateWithoutUsersInput = {
    LibrarianID?: number
    LibrarianName: string
  }

  export type librarianCreateOrConnectWithoutUsersInput = {
    where: librarianWhereUniqueInput
    create: XOR<librarianCreateWithoutUsersInput, librarianUncheckedCreateWithoutUsersInput>
  }

  export type librarianCreateManyUsersInputEnvelope = {
    data: librarianCreateManyUsersInput | librarianCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type patronCreateWithoutUsersInput = {
    PatronFirstName: string
    PatronMiddleName?: string | null
    PatronLastName: string
    PatronDepartment?: string | null
    PatronSemester?: string | null
    PatronRollNo?: string | null
    PatronEnrollmentNumber?: string | null
    PatronImage?: string | null
    itemtransaction?: itemtransactionCreateNestedManyWithoutPatronInput
  }

  export type patronUncheckedCreateWithoutUsersInput = {
    PatronID?: number
    PatronFirstName: string
    PatronMiddleName?: string | null
    PatronLastName: string
    PatronDepartment?: string | null
    PatronSemester?: string | null
    PatronRollNo?: string | null
    PatronEnrollmentNumber?: string | null
    PatronImage?: string | null
    itemtransaction?: itemtransactionUncheckedCreateNestedManyWithoutPatronInput
  }

  export type patronCreateOrConnectWithoutUsersInput = {
    where: patronWhereUniqueInput
    create: XOR<patronCreateWithoutUsersInput, patronUncheckedCreateWithoutUsersInput>
  }

  export type patronCreateManyUsersInputEnvelope = {
    data: patronCreateManyUsersInput | patronCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_typeCreateWithoutUsersInput = {
    UserTypeName: string
    IsLibrarian?: boolean | null
    IsAdmin?: boolean | null
    IsStudent?: boolean | null
  }

  export type user_typeUncheckedCreateWithoutUsersInput = {
    UserTypeID?: number
    UserTypeName: string
    IsLibrarian?: boolean | null
    IsAdmin?: boolean | null
    IsStudent?: boolean | null
  }

  export type user_typeCreateOrConnectWithoutUsersInput = {
    where: user_typeWhereUniqueInput
    create: XOR<user_typeCreateWithoutUsersInput, user_typeUncheckedCreateWithoutUsersInput>
  }

  export type librarianUpsertWithWhereUniqueWithoutUsersInput = {
    where: librarianWhereUniqueInput
    update: XOR<librarianUpdateWithoutUsersInput, librarianUncheckedUpdateWithoutUsersInput>
    create: XOR<librarianCreateWithoutUsersInput, librarianUncheckedCreateWithoutUsersInput>
  }

  export type librarianUpdateWithWhereUniqueWithoutUsersInput = {
    where: librarianWhereUniqueInput
    data: XOR<librarianUpdateWithoutUsersInput, librarianUncheckedUpdateWithoutUsersInput>
  }

  export type librarianUpdateManyWithWhereWithoutUsersInput = {
    where: librarianScalarWhereInput
    data: XOR<librarianUpdateManyMutationInput, librarianUncheckedUpdateManyWithoutUsersInput>
  }

  export type librarianScalarWhereInput = {
    AND?: librarianScalarWhereInput | librarianScalarWhereInput[]
    OR?: librarianScalarWhereInput[]
    NOT?: librarianScalarWhereInput | librarianScalarWhereInput[]
    LibrarianID?: IntFilter<"librarian"> | number
    LibrarianName?: StringFilter<"librarian"> | string
    UserID?: IntNullableFilter<"librarian"> | number | null
  }

  export type patronUpsertWithWhereUniqueWithoutUsersInput = {
    where: patronWhereUniqueInput
    update: XOR<patronUpdateWithoutUsersInput, patronUncheckedUpdateWithoutUsersInput>
    create: XOR<patronCreateWithoutUsersInput, patronUncheckedCreateWithoutUsersInput>
  }

  export type patronUpdateWithWhereUniqueWithoutUsersInput = {
    where: patronWhereUniqueInput
    data: XOR<patronUpdateWithoutUsersInput, patronUncheckedUpdateWithoutUsersInput>
  }

  export type patronUpdateManyWithWhereWithoutUsersInput = {
    where: patronScalarWhereInput
    data: XOR<patronUpdateManyMutationInput, patronUncheckedUpdateManyWithoutUsersInput>
  }

  export type patronScalarWhereInput = {
    AND?: patronScalarWhereInput | patronScalarWhereInput[]
    OR?: patronScalarWhereInput[]
    NOT?: patronScalarWhereInput | patronScalarWhereInput[]
    PatronID?: IntFilter<"patron"> | number
    PatronFirstName?: StringFilter<"patron"> | string
    PatronMiddleName?: StringNullableFilter<"patron"> | string | null
    PatronLastName?: StringFilter<"patron"> | string
    PatronDepartment?: StringNullableFilter<"patron"> | string | null
    PatronSemester?: StringNullableFilter<"patron"> | string | null
    PatronRollNo?: StringNullableFilter<"patron"> | string | null
    PatronEnrollmentNumber?: StringNullableFilter<"patron"> | string | null
    PatronImage?: StringNullableFilter<"patron"> | string | null
    UserID?: IntNullableFilter<"patron"> | number | null
  }

  export type user_typeUpsertWithoutUsersInput = {
    update: XOR<user_typeUpdateWithoutUsersInput, user_typeUncheckedUpdateWithoutUsersInput>
    create: XOR<user_typeCreateWithoutUsersInput, user_typeUncheckedCreateWithoutUsersInput>
    where?: user_typeWhereInput
  }

  export type user_typeUpdateToOneWithWhereWithoutUsersInput = {
    where?: user_typeWhereInput
    data: XOR<user_typeUpdateWithoutUsersInput, user_typeUncheckedUpdateWithoutUsersInput>
  }

  export type user_typeUpdateWithoutUsersInput = {
    UserTypeName?: StringFieldUpdateOperationsInput | string
    IsLibrarian?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsStudent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type user_typeUncheckedUpdateWithoutUsersInput = {
    UserTypeID?: IntFieldUpdateOperationsInput | number
    UserTypeName?: StringFieldUpdateOperationsInput | string
    IsLibrarian?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsAdmin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsStudent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type itemtransactionCreateManyItemInput = {
    ItemTranID?: number
    IsAvailable?: boolean | null
    ItemAssignedTo?: number | null
    IsVisible?: boolean | null
  }

  export type itemtransactionUpdateWithoutItemInput = {
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    patron?: patronUpdateOneWithoutItemtransactionNestedInput
  }

  export type itemtransactionUncheckedUpdateWithoutItemInput = {
    ItemTranID?: IntFieldUpdateOperationsInput | number
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ItemAssignedTo?: NullableIntFieldUpdateOperationsInput | number | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type itemtransactionUncheckedUpdateManyWithoutItemInput = {
    ItemTranID?: IntFieldUpdateOperationsInput | number
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ItemAssignedTo?: NullableIntFieldUpdateOperationsInput | number | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type itemtransactionCreateManyPatronInput = {
    ItemTranID?: number
    ItemID: number
    IsAvailable?: boolean | null
    IsVisible?: boolean | null
  }

  export type itemtransactionUpdateWithoutPatronInput = {
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
    item?: itemUpdateOneRequiredWithoutItemtransactionNestedInput
  }

  export type itemtransactionUncheckedUpdateWithoutPatronInput = {
    ItemTranID?: IntFieldUpdateOperationsInput | number
    ItemID?: IntFieldUpdateOperationsInput | number
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type itemtransactionUncheckedUpdateManyWithoutPatronInput = {
    ItemTranID?: IntFieldUpdateOperationsInput | number
    ItemID?: IntFieldUpdateOperationsInput | number
    IsAvailable?: NullableBoolFieldUpdateOperationsInput | boolean | null
    IsVisible?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersCreateManyUser_typeInput = {
    UserID?: number
    UserName: string
    UserPass: string
    UserEmail?: string | null
  }

  export type usersUpdateWithoutUser_typeInput = {
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    librarian?: librarianUpdateManyWithoutUsersNestedInput
    patron?: patronUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_typeInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
    librarian?: librarianUncheckedUpdateManyWithoutUsersNestedInput
    patron?: patronUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateManyWithoutUser_typeInput = {
    UserID?: IntFieldUpdateOperationsInput | number
    UserName?: StringFieldUpdateOperationsInput | string
    UserPass?: StringFieldUpdateOperationsInput | string
    UserEmail?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type librarianCreateManyUsersInput = {
    LibrarianID?: number
    LibrarianName: string
  }

  export type patronCreateManyUsersInput = {
    PatronID?: number
    PatronFirstName: string
    PatronMiddleName?: string | null
    PatronLastName: string
    PatronDepartment?: string | null
    PatronSemester?: string | null
    PatronRollNo?: string | null
    PatronEnrollmentNumber?: string | null
    PatronImage?: string | null
  }

  export type librarianUpdateWithoutUsersInput = {
    LibrarianName?: StringFieldUpdateOperationsInput | string
  }

  export type librarianUncheckedUpdateWithoutUsersInput = {
    LibrarianID?: IntFieldUpdateOperationsInput | number
    LibrarianName?: StringFieldUpdateOperationsInput | string
  }

  export type librarianUncheckedUpdateManyWithoutUsersInput = {
    LibrarianID?: IntFieldUpdateOperationsInput | number
    LibrarianName?: StringFieldUpdateOperationsInput | string
  }

  export type patronUpdateWithoutUsersInput = {
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
    itemtransaction?: itemtransactionUpdateManyWithoutPatronNestedInput
  }

  export type patronUncheckedUpdateWithoutUsersInput = {
    PatronID?: IntFieldUpdateOperationsInput | number
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
    itemtransaction?: itemtransactionUncheckedUpdateManyWithoutPatronNestedInput
  }

  export type patronUncheckedUpdateManyWithoutUsersInput = {
    PatronID?: IntFieldUpdateOperationsInput | number
    PatronFirstName?: StringFieldUpdateOperationsInput | string
    PatronMiddleName?: NullableStringFieldUpdateOperationsInput | string | null
    PatronLastName?: StringFieldUpdateOperationsInput | string
    PatronDepartment?: NullableStringFieldUpdateOperationsInput | string | null
    PatronSemester?: NullableStringFieldUpdateOperationsInput | string | null
    PatronRollNo?: NullableStringFieldUpdateOperationsInput | string | null
    PatronEnrollmentNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PatronImage?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}