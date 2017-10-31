/* tslint:disable */

declare var Object: any;
export interface CredentialUserInterface {
  "id"?: number;
  "username": string;
  "realm": string;
  "emailVerified"?: string;
  "email"?: string;
  "password"?: string;
  accessTokens?: any[];
}

export class CredentialUser implements CredentialUserInterface {
  "id": number;
  "username": string;
  "realm": string;
  "emailVerified": string;
  "email": string;
  "password": string;
  accessTokens: any[];
  constructor(data?: CredentialUserInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CredentialUser`.
   */
  public static getModelName() {
    return "CredentialUser";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CredentialUser for dynamic purposes.
  **/
  public static factory(data: CredentialUserInterface): CredentialUser{
    return new CredentialUser(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CredentialUser',
      plural: 'CredentialUsers',
      path: 'CredentialUsers',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "username": {
          name: 'username',
          type: 'string'
        },
        "realm": {
          name: 'realm',
          type: 'string'
        },
        "emailVerified": {
          name: 'emailVerified',
          type: 'string'
        },
        "email": {
          name: 'email',
          type: 'string'
        },
        "password": {
          name: 'password',
          type: 'string'
        },
      },
      relations: {
        accessTokens: {
          name: 'accessTokens',
          type: 'any[]',
          model: ''
        },
      }
    }
  }
}
