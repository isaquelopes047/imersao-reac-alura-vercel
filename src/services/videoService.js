import { createClient } from '@supabase/supabase-js'

const PROJECT_URL = 'https://cnsjqiscwhqpobuykvka.supabase.co'
const PROJECT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuc2pxaXNjd2hxcG9idXlrdmthIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTAzODMwOTgsImV4cCI6MjAwNTk1OTA5OH0.6-XCE460Y-w_iPfQtmw6W9aW_HASqalbqnyI1jMeNwg'
const supabase = createClient(PROJECT_URL, PROJECT_KEY)

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("aluratube")
            .select("*")
        }
    }
}