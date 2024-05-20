import { Account, Client ,Databases, ID,Storage } from 'appwrite';

const client = new Client();
export const PROJECT_ID = "662f59ca00127153b78b"
export const DATABASE_ID = "6631f501001d09517167"
export const COLLECTION_ID_ALLPRODUCTS = "6631f64f00241f9dae6d"

client

.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('662f59ca00127153b78b');

export const storage = new Storage(client);
export const databases = new Databases(client);
export const account = new Account(client);
export { ID } from "appwrite";




export default client;