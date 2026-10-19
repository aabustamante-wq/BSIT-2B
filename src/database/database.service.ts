import { Injectable, OnModuleInit } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private pool: any;

  async onModuleInit() {
    this.pool = mysql.createPool({
      host: 'mysql-1f32b95e-gbox-a575.l.aivencloud.com',
      port: 10580,
      user: 'avnadmin',
      password: 'process.env.DB_PASSWORD',
      database: 'defaultdb',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    await this.pool.query('SELECT 1');

    console.log('MySQL pool created');
  }

  getPool() {
    return this.pool;
  }
}