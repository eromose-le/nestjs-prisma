import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomInterceptor } from './custom.interceptor';
import { SummaryModule } from './summary/summary.module';
import { SummaryController } from './summary/summary.controller';
import { ReportController } from './report/report.controller';
import { ReportService } from './report/report.service';
import { ReportModule } from './report/report.module';
import { SummaryService } from './summary/summary.service';

@Module({
  imports: [SummaryModule, ReportModule],
  controllers: [AppController, SummaryController, ReportController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    ReportService,
    SummaryService,
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: CustomInterceptor,
    // },
  ],
})
export class AppModule {}
