'use client'

import { useEffect, useState } from 'react'
import ValentineExperience from '@/components/ValentineExperience'
import { useParams } from 'next/navigation'

interface ValentineData {
  senderName: string
  partnerName: string
  message: string
  songPlaylist: string
}