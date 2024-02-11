"use client"
import { Header } from "@/components/Header";
import styles from "./page.module.css";
import { Box, Button, Card, CardContent, Typography, CardMedia, CardActions, Container } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/navigation'


const data = [
  {
    id: 1,
    name: 'Valencia',
    image: '/valencia.jpeg',
    text: '4 - этажный жилой комплекс с объектами СКБ и подземным автопаркингом на отведенной территории по ул. Балык-Кумар в г. Бишкек.'
  },
  {
    id: 2,
    name: 'Regency',
    image: '/regency.png',
    text: '15- этажный жилой дом с объектами СКБ и подземным автопаркингом на отведенной территории по ул. А. Дуйшеева 11, ул. Сухе Батора - пр. Токомбаева.'
  },
  {
    id: 3,
    name: 'Enfield',
    image: '/enfield.png',
    text: '8 этажный жилой дом с объектами СКБ и подземным автопаркингом на собственной территории по ул. Байтик Баатыра 55; 57.'
  },
  {
    id: 4,
    name: 'Muras Nuru',
    image: '/mn.jpg',
    text: 'Многофункциональный жилой комплекс  с переменной этажностью и объектами СКБ, на собственной территории в южной зоне в г. Бишкек.'
  },
]

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Header />
      <Container>
        <main className={styles.main}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {data.map(i => (
              <Card key={i.id} onClick={() => router.push(`/${i.id}`)} sx={{ maxWidth: 345, minWidth: 345, cursor: 'pointer' }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={i.image}
                  title={i.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {i.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {i.text}
                  </Typography>
                </CardContent>
              </Card>))}
          </Box>
        </main>
      </Container>
    </>
  );
}
