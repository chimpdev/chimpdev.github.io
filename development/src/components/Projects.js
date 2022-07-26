import Project from './Project';

export default function (props) {
  return (
    <div className="w-full h-max flex gap-8 flex-col md:flex-row mt-5">
      <Project image="https://ravencode.live/assets/8bd4198d-4d34e62c-1655584172331.png" to="https://ravencode.live" title="Raven Code" description="Raven Discord sunucusu tarafından, geliştiricilerin başkaları için kod paylaşabileceği bir ortam yaratmak amacıyla oluşturulmuş, kod paylaşım sitesidir."/>
      <Project image="https://cdn.discordapp.com/guilds/929475069166649395/users/613700645173592086/banners/a_ecfe253793db643feb08f6fe5e5588a7.png?size=1024" to="https://discord.com/invite/blindcord" title="Blindcord" description="Kullanıcılar arası anonim sohbeti sağlayan Discord sunucusudur. Mesajlarınız siz ve eşleştiğiniz kullanıcı dışında kimse tarafından görüntülenmez veya arşivlenmez."/>
    </div>
  )
}