export interface Item {
  rendered_body: string
  body: string
  coediting: boolean
  comments_count: number
  created_at: string
  group?: null
  id: string
  likes_count: number
  private: boolean
  reactions_count: number
  tags?: (TagsEntity)[] | null
  title: string
  updated_at: string
  url: string
  user: User
  page_views_count?: null
}

export interface TagsEntity {
  name: string
  versions?: (null)[] | null
}

export interface User {
  description: string
  facebook_id: string
  followees_count: number
  followers_count: number
  github_login_name: string
  id: string
  items_count: number
  linkedin_id: string
  location: string
  name: string
  organization: string
  permanent_id: number
  profile_image_url: string
  team_only: boolean
  twitter_screen_name: string
  website_url: string
}
