import { Button, Link } from '@mui/material';
import Head from 'next/head';
import AppForm from '../components/AppForm';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


export default function Home() {
  return (
    <div >
      <Head>
        <title>"O sucesso como influenciadora digital transformou a vida de Nikitta"</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <AppForm>
    <main>
        <h1 style={{alignContent:'center', lineHeight:'1.15', marginTop:'70px'}}>
          "O SUCESSO COMO INFLUENCIADORA DIGITAL TRANSFORMOU A VIDA DE NIKITTA"
        </h1>

        <p className={styles.description}>
          Com apenas 26 anos, Nikitta é um sucesso como criadora de conteúdo exclusivo.
        </p>        

          <div style={{ display:'flex', flexDirection:'row',justifyContent:'center',  border: '1px solid #eaeaea',borderRadius:'15px',margin:'auto', width:'40%'}}>
            <AccessTimeIcon  style={{alignSelf:'center'}}/>
            <h5>  3 min de leitura</h5>
          </div>
      

          <Link
              variant="h3"
              underline="none"
              color="#E9AB17"
              href="https://lorena.r7.com/colunista/Lorena-Magazine"
              sx={{ fontSize: 12, alignContent:'center', alignSelf:'center' }}
            >
              {'@Lorena Silva'}
            </Link>
           

        <h6 >14 Mar 2023 - 16h50 | Atualizado em 14 Mar 2023 - 16h50</h6>
     
        <img src="/post.jpeg" alt="Nikita" style={{width:'100%', justifyContent:'center',}} />

        <Button variant="contained" href="https://kiwify.app/Ti9MNth?afid=478fNesw"  style={{ display:'flex',marginTop:30}}  >
         <p  style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
          Quero aprender
        </p>
        </Button>


        <p style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
        Com apenas 26 anos, Nikitta já é uma personalidade influente no mundo digital. Seu sucesso como criadora de conteúdo exclusivo e autêntico tem conquistado milhares de seguidores e transformado sua vida com a internet. Mas o que exatamente faz Nikitta tão especial? Vamos descobrir.
        </p>  

        <p  style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
        A jovem empreendedora fatura em dólar com a venda de conteúdo exclusivo para seus seguidores. Essa prática é comum entre os influenciadores, mas o que diferencia Nikitta dos demais é a maneira como ela se conecta com sua audiência. Ela é autêntica e prestativa em todo post e vídeo, o que faz com que se destaque bastante dentro deste modelo de negócio. Além disso, seu trabalho não é apenas voltado para os seguidores Brasileiros, a criadora revela que 60% da sua receita vem de seguidores estrangeiros que compram seus conteúdos de outros lugares do mundo.
        </p>

        <p  style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
        Apesar de trabalhar com uma equipe de apoio, Nikitta é a mente criativa por trás de seus conteúdos. Ela é incansável na busca por inovação e criatividade, e se dedica a criar conteúdos exclusivos e diferentes para manter sua audiência engajada. Sua visão e paixão pelo trabalho são o que a levaram a construir uma carreira bem-sucedida.
        </p>

        
        <img src="/nikita.jpeg" alt="Nikita" style={{width:'100%', justifyContent:'center',}} />


        <p style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
        Em suas próprias palavras, "o trabalho mudou a minha vida. Eu conquistei a independência financeira e estou realizando coisas que não imaginava realizar tão cedo". Além do sucesso profissional, Nikitta agora está focada em ajudar outras mulheres a venderem conteúdo de forma segura para o exterior. Ela tem um projeto em que ensina suas estratégias e compartilha dicas valiosas para quem deseja seguir seus passos.
        </p>  

        <p  style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
        Nikitta se sente muito grata pelo sucesso que conquistou como influenciadora digital. Além da realização profissional, ela enfatiza que a independência financeira também trouxe uma grande mudança em sua vida pessoal. "Antes, eu tinha muitas preocupações financeiras e isso afetava minha saúde mental. Hoje, eu tenho mais estabilidade e liberdade para fazer o que eu gosto", diz ela.
        </p>

        <p  style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
        Mas para Nikitta, o sucesso não se trata apenas de dinheiro. Ela destaca que seu trabalho mudou a vida de sua família e isso é algo que não tem preço. "Eu sou muito grata por poder ajudar a minha família e proporcionar mais conforto e segurança para todos", afirma. Para Nikitta, a independência financeira significa ter mais possibilidades e poder fazer a diferença na vida das pessoas que ama.
        </p>

        <p  style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
        Além disso, Nikitta continua a buscar inovação e avanços em seus conteúdos. Ela é grata por todo o sucesso que conquistou até agora, mas sabe que ainda há muito mais a ser alcançado.
        </p>

        <Button variant="contained" href="https://kiwify.app/Ti9MNth?afid=478fNesw"  style={{ display:'flex',}}  >
         <p  style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1.5rem'}}>
          Quero aprender
        </p>
        </Button>

        <p  style={{textAlign:'inherit', lineHeight:'1.5', fontSize:'1rem'}}>
          Foto Destaque: Reprodução
        </p>




      </main>
    </AppForm>
     

      <Header/>

      <footer>
        <a
          href="https://kiwify.app/Ti9MNth?afid=478fNesw"
          target="_blank"
          rel="noopener noreferrer"
        >
         © 2023 Todos os direitos reservados
        
        </a>
      </footer>

      <style jsx>{`
   
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
