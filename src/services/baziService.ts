import { BaziRequestData } from '../types/bazi';

const BASE_URL = 'http://localhost:8000/v1';

export const fetchPaipan = async (bodyData: BaziRequestData) => {
  const response = await fetch(`${BASE_URL}/paipan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  });
  if (!response.ok) throw new Error('Failed to fetch Paipan data');
  return response.json();
};

export const fetchCesuan = async (bodyData) => {
  const response = await fetch(`${BASE_URL}/cesuan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  });
  if (!response.ok) throw new Error('Failed to fetch Cesuan data');
  return response.json();
};

export const fetchJingpan = async (bodyData) => {
  const response = await fetch(`${BASE_URL}/jingpan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyData),
  });
  if (!response.ok) throw new Error('Failed to fetch Jingpan data');
  return response.json();
};
