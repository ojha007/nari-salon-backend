import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AppointmentController from './appointment.controller';
import AppointmentEntity from './appointment.entity';
import AppointmentService from './appointment.service';
import AppointmentStatusEntity from './appointment.status.entity';
import AppointmentStatusService from './status.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AppointmentEntity, AppointmentStatusEntity]),
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService, AppointmentStatusService],
  exports: [],
})
export default class AppointmentModule {}
