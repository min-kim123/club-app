export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      board_groups_users: {
        Row: {
          group_id: string
          position: string
          user_id: string
        }
        Insert: {
          group_id: string
          position: string
          user_id: string
        }
        Update: {
          group_id?: string
          position?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "groups_profiles_groups_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_profiles_profiles_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          created_at: string
          description: string | null
          group_id: string
          id: string
          location: string
          name: string
          num_additional_hosts: number | null
          time: string
          university_slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          group_id?: string
          id?: string
          location: string
          name: string
          num_additional_hosts?: number | null
          time?: string
          university_slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          group_id?: string
          id?: string
          location?: string
          name?: string
          num_additional_hosts?: number | null
          time?: string
          university_slug?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_events_university_slug_fkey"
            columns: ["university_slug"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["slug"]
          },
          {
            foreignKeyName: "public_eventsm_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      groups: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image: string | null
          name: string
          slug: string | null
          university_slug: string
          year_founded: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          name: string
          slug?: string | null
          university_slug: string
          year_founded?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image?: string | null
          name?: string
          slug?: string | null
          university_slug?: string
          year_founded?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_groups_school_slug_fkey"
            columns: ["university_slug"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["slug"]
          },
        ]
      }
      groups_events: {
        Row: {
          event_id: string
          group_id: string
        }
        Insert: {
          event_id: string
          group_id: string
        }
        Update: {
          event_id?: string
          group_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "groups_profiles_events_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "groups_profiles_groups_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      likes: {
        Row: {
          created_at: string
          group_id: string
          id: number
          user_id: string
        }
        Insert: {
          created_at?: string
          group_id?: string
          id?: number
          user_id?: string
        }
        Update: {
          created_at?: string
          group_id?: string
          id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_likes_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      sections: {
        Row: {
          created_at: string
          description: string | null
          group_id: string
          id: string
          name: string
          slug: string | null
          time: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          group_id?: string
          id?: string
          name: string
          slug?: string | null
          time?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          group_id?: string
          id?: string
          name?: string
          slug?: string | null
          time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_sections_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "groups"
            referencedColumns: ["id"]
          },
        ]
      }
      sections_users: {
        Row: {
          section_id: string
          user_id: string
        }
        Insert: {
          section_id: string
          user_id: string
        }
        Update: {
          section_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sections_users_sections_id_fkey"
            columns: ["section_id"]
            isOneToOne: false
            referencedRelation: "sections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sections_users_users_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      universities: {
        Row: {
          city: string
          created_at: string
          latitude: number
          longitude: number
          name: string
          slug: string
          state: string
        }
        Insert: {
          city: string
          created_at?: string
          latitude: number
          longitude: number
          name: string
          slug: string
          state: string
        }
        Update: {
          city?: string
          created_at?: string
          latitude?: number
          longitude?: number
          name?: string
          slug?: string
          state?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          first_major: string | null
          grad_year: number | null
          id: string
          name: string
          school_slug: string | null
          second_major: string | null
          slug: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          first_major?: string | null
          grad_year?: number | null
          id?: string
          name: string
          school_slug?: string | null
          second_major?: string | null
          slug?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          first_major?: string | null
          grad_year?: number | null
          id?: string
          name?: string
          school_slug?: string | null
          second_major?: string | null
          slug?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profiles_school_slug_fkey"
            columns: ["school_slug"]
            isOneToOne: false
            referencedRelation: "universities"
            referencedColumns: ["slug"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_slug_for_user: {
        Args: {
          username: string
        }
        Returns: string
      }
      slugify: {
        Args: {
          value: string
        }
        Returns: string
      }
      unaccent: {
        Args: {
          "": string
        }
        Returns: string
      }
      unaccent_init: {
        Args: {
          "": unknown
        }
        Returns: unknown
      }
    }
    Enums: {
      day_of_week:
        | "Monday"
        | "Tuesday"
        | "Wednesday"
        | "Thursday"
        | "Friday"
        | "Saturday"
        | "Sunday"
      school_type: "CAS" | "Tandon" | "Stern" | "Steinhardt" | "Gallatin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
