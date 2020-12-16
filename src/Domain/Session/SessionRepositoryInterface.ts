import { Session } from './Session'

export interface SessionRepositoryInterface {
  findOneByUuid(uuid: string): Promise<Session | undefined>
  findOneByUuidAndUserUuid(uuid: string, userUuid: string): Promise<Session | undefined>
  findActiveByUserUuid(userUuid: string): Promise<Array<Session>>
  deleteAllByUserUuidExceptOne(userUuid: string, currentSessionUuid: string): Promise<void>
  deleteOneByUuid(uuid: string): Promise<void>
  updateHashedTokens(uuid: string, hashedAccessToken: string, hashedRefreshToken: string): Promise<void>
  updatedTokenExpirationDates(uuid: string, accessExpiration: Date, refreshExpiration: Date): Promise<void>
  save(session: Session): Promise<void>
}