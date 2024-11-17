import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
export class Certificado {
  @PrimaryGeneratedColumn()
  idCertificate: number

  @Column({ length: 30, nullable: true })
  idUser: string

  @Column({ length: 30, nullable: true })
  nameCurse: string

  @CreateDateColumn({ nullable: true })
  dateFinish: Date

  @Column({ length: 20, nullable: true })
  category: string

  @Column({ length: 50, nullable: true })
  teacher: String
}
