import { Controller, Get } from '@nestjs/common';
import { SupabaseService } from './supabase/supabase.service';

@Controller('health')
export class HealthController {
  constructor(private readonly supabase: SupabaseService) {}

  @Get()
  async health() {
    const { error } = await this.supabase.client.auth.getSession();
    return { ok: !error, supabaseOk: !error };
  }
}
