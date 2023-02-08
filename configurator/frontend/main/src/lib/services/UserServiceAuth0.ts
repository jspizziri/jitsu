import { LoginFeatures, SSOAuthLink, TelemetrySettings, UserEmailStatus, UserService } from "./UserService"
import { ApiAccess } from "./model"
import { SignupRequest } from "../../../../../../test_api"
import { User } from "generated/conf-openapi/models/User"

export class Auth0UserService implements UserService {


  constructor(config: any) {

  }

  apiAccess(): ApiAccess {
    return undefined
  }

  changeEmail(value: string): Promise<void> {
    return Promise.resolve(undefined)
  }

  changePassword(value: string, resetId?: string): Promise<void> {
    return Promise.resolve(undefined)
  }

  changeTelemetrySettings(newSettings: TelemetrySettings): Promise<void> {
    return Promise.resolve(undefined)
  }

  createUser(signup: SignupRequest): Promise<void> {
    throw new Error("Method not implemented.")
  }

  getIdToken(): Promise<string> {
    return Promise.resolve("")
  }

  getLoginFeatures(): LoginFeatures {
    return {
      oauth: false,
      password: false,
      signupEnabled: false,
    }
  }

  getSSOAuthLink(): SSOAuthLink {
    return {
      onClick: () => Promise.resolve(undefined),
      title: "Auth0"
    }
  }

  getUser(): User {
    throw new Error("User is null. Should you call services.userService.hasUser()?")
  }

  getUserEmailStatus(): UserEmailStatus {
    return undefined
  }

  hasUser(): boolean {
    return false
  }

  initiateGithubLogin(redirect?: string) {
    throw new Error("Method not implemented.")
  }

  initiateGoogleLogin(redirect?: string): Promise<string> {
    throw new Error("Method not implemented.")
  }

  isEmailLoginLink(href: string): boolean {
    return false
  }

  login(email: string, password: string): Promise<void> {
    throw new Error("Method not implemented.")
  }

  loginWithLink(email: string, href: string): Promise<void> {
    throw new Error("Method not implemented.")
  }

  removeAuth(callback: () => void) {
  }

  sendConfirmationEmail(): Promise<void> {
    throw new Error("Method not implemented.")
  }

  sendLoginLink(email: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  sendPasswordReset(email?: string) {
  }

  supportsLoginViaLink(): boolean {
    return false
  }

  waitForUser(): Promise<void> {
    return Promise.resolve(undefined)
  }

}