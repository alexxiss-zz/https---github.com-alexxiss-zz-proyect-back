import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Beca {
  @PrimaryGeneratedColumn()
  idCertificate: number

  @Column({ length: 30, nullable: true })
  requestingUser: string

  @Column({ length: 30, nullable: true })
  typeRequest: string

  @CreateDateColumn({ nullable: true })
  dateBeca: Date

  @Column({ length: 20, nullable: true })
  document: string

  @Column({ nullable: true })
  status: boolean
}
