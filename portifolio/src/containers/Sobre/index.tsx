/* eslint-disable prettier/prettier */
import Title from '../../components/title'
import Paragrafo from '../../components/Paragrafo'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id atque nam ad, inventore, reiciendis cupiditate, tenetur molestiae doloremque culpa necessitatibus nulla soluta. Fugit consequuntur rem molestiae in necessitatibus recusandae!
    </Paragrafo>
    <div>
      <img src="https://github-readme-stats.vercel.app/api?username=daianearrudaa&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=daianearrudaa&layout=compact&langs_count=7&theme=dracula" />
    </div>
  </section>
)

export default Sobre
