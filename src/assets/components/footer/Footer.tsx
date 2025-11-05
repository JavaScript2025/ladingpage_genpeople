import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
  let data = new Date().getFullYear()
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-[#DCECF2] text-black">
      <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-roboto'>
                           Gen People Generation | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                        <LinkedinLogoIcon size={40} weight='bold' />
                        <InstagramLogoIcon size={40} weight='bold' />
                        <FacebookLogoIcon size={40} weight='bold' />
                    </div>
                </div>
      </div>
    </>
  );
}

export default Footer;
