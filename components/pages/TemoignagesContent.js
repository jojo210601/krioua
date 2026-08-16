'use client';
import Link from 'next/link';
import { ArrowRight, Star, Play, Quote } from 'lucide-react';
import { Reveal, SectionHeader } from '@/components/site/motion-primitives';

const TESTIMONIALS = [
  { name: 'Sophie L.', city: 'Genève', text: "J'ai retrouvé un vrai calme intérieur après plusieurs mois de stress intense. L'accueil de Maxime est d'une douceur rare.", rating: 5, video: true },
  { name: 'Marc D.', city: 'Nyon', text: "Après quelques séances, je me sens plus léger, mieux ancré. Une belle rencontre humaine avant tout