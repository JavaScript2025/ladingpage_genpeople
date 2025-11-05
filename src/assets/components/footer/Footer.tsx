import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Footer() {
  let data = new Date().getFullYear()
  return (
    <>
      <div className="w-full flex justify-center py-4 bg-[#FFFAFA] text-black border-t-2 border-gray-100 pt-8">
      <div className="container flex flex-col items-center py-4">
                    <p className='text-xs font-roboto'>
                           Gen People Generation | Copyright: {data}
                        </p>
                    <p className='text-x '>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                      <a href=""><LinkedinLogoIcon size={30} weight='bold' /></a>
                      <a href=""><InstagramLogoIcon size={30} weight='bold' /></a>
                      <a href=""><FacebookLogoIcon size={30} weight='bold' /></a>
                    </div>
                </div>
      </div>
    </>
  );
}

export default Footer;
