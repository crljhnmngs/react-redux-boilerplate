export type UserState = {
    data: UserDataResponse | null;
    loading: boolean;
    error: string | null;
};

export type UserDataResponse = {
    results?: User[] | null;
    info?: Info | null;
};

export type User = {
    gender?: string | null;
    name?: Name | null;
    location?: UserLocation | null;
    email?: string | null;
    login?: Login | null;
    dob?: Dob | null;
    registered?: Registered | null;
    phone?: string | null;
    cell?: string | null;
    id?: ID | null;
    picture?: Picture | null;
    nat?: string | null;
};

type Name = {
    title?: string | null;
    first?: string | null;
    last?: string | null;
};

type UserLocation = {
    street?: Street | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    postcode?: number | null;
    coordinates?: Coordinates | null;
    timezone?: Timezone | null;
};

type Street = {
    number?: number | null;
    name?: string | null;
};

type Coordinates = {
    latitude?: string | null;
    longitude?: string | null;
};

type Timezone = {
    offset?: string | null;
    description?: string | null;
};

type Login = {
    uuid?: string | null;
    username?: string | null;
    password?: string | null;
    salt?: string | null;
    md5?: string | null;
    sha1?: string | null;
    sha256?: string | null;
};

type Dob = {
    date?: string | null;
    age?: number | null;
};

type Registered = {
    date?: string | null;
    age?: number | null;
};

type ID = {
    name?: string | null;
    value?: string | null;
};

type Picture = {
    large?: string | null;
    medium?: string | null;
    thumbnail?: string | null;
};

type Info = {
    seed?: string | null;
    results?: number | null;
    page?: number | null;
    version?: string | null;
};
