import "server-only";
import { createAdminSupabaseClient } from "./supabase/server";

export type QrCodeTargetType =
  | "product"
  | "category"
  | "discount"
  | "whatsapp"
  | "email"
  | "wifi"
  | "url"
  | "text";

export type QrCodeStatus = "active" | "archived";

export type QrCodeDesign = {
  id: string;
  name: string;
  targetType: QrCodeTargetType;
  targetConfig: Record<string, unknown>;
  designConfig: Record<string, unknown>;
  labelConfig: Record<string, unknown>;
  status: QrCodeStatus;
  createdBy: string | null;
  createdAt: string;
  updatedAt: string;
};

type QrCodeDesignRow = {
  id: string;
  name: string;
  target_type: QrCodeTargetType;
  target_config: Record<string, unknown> | null;
  design_config: Record<string, unknown> | null;
  label_config: Record<string, unknown> | null;
  status: QrCodeStatus;
  created_by: string | null;
  created_at: string;
  updated_at: string;
};

export type UpsertQrCodeDesignInput = {
  id?: string | null;
  name: string;
  targetType: QrCodeTargetType;
  targetConfig: Record<string, unknown>;
  designConfig: Record<string, unknown>;
  labelConfig: Record<string, unknown>;
  status?: QrCodeStatus;
  createdBy?: string | null;
};

function mapQrCodeDesign(row: QrCodeDesignRow): QrCodeDesign {
  return {
    id: row.id,
    name: row.name,
    targetType: row.target_type,
    targetConfig: row.target_config ?? {},
    designConfig: row.design_config ?? {},
    labelConfig: row.label_config ?? {},
    status: row.status,
    createdBy: row.created_by,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function isMissingQrCodeTableError(error: { code?: string; message?: string } | null) {
  return (
    error?.code === "42P01" ||
    error?.message?.toLowerCase().includes("qr_code_designs") === true
  );
}

export async function listQrCodeDesigns() {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("qr_code_designs")
    .select("id,name,target_type,target_config,design_config,label_config,status,created_by,created_at,updated_at")
    .order("updated_at", { ascending: false });

  if (error) {
    if (isMissingQrCodeTableError(error)) {
      return [];
    }

    throw new Error(error.message);
  }

  return (data as QrCodeDesignRow[]).map(mapQrCodeDesign);
}

export async function getQrCodeDesign(id: string) {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("qr_code_designs")
    .select("id,name,target_type,target_config,design_config,label_config,status,created_by,created_at,updated_at")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    if (isMissingQrCodeTableError(error)) {
      return null;
    }

    throw new Error(error.message);
  }

  return data ? mapQrCodeDesign(data as QrCodeDesignRow) : null;
}

export async function upsertQrCodeDesign(input: UpsertQrCodeDesignInput) {
  const supabase = createAdminSupabaseClient();
  const now = new Date().toISOString();
  const payload = {
    name: input.name,
    target_type: input.targetType,
    target_config: input.targetConfig,
    design_config: input.designConfig,
    label_config: input.labelConfig,
    status: input.status ?? "active",
    created_by: input.createdBy ?? null,
    updated_at: now,
  };

  if (input.id) {
    const { data, error } = await supabase
      .from("qr_code_designs")
      .update(payload)
      .eq("id", input.id)
      .select("id")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return String(data.id);
  }

  const { data, error } = await supabase
    .from("qr_code_designs")
    .insert({
      ...payload,
      created_at: now,
    })
    .select("id")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return String(data.id);
}

export async function updateQrCodeDesignStatus(id: string, status: QrCodeStatus) {
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase
    .from("qr_code_designs")
    .update({
      status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteQrCodeDesign(id: string) {
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("qr_code_designs").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
