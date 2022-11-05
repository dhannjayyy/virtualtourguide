import Image from "next/image";

function SiteCard({url,title,description}) {
  return (
    
        <figure className="image-block">
	<h1>{title}</h1>
    <div style={{ height: '100%', position: 'relative'}}>
    <Image src={url} alt=""   
     layout='fill'
     objectFit='contain'
            className="site-image" />
            </div>
	<figcaption>
		<h3>
			More Info
		</h3>
		<p>{description}</p>
		<button>
			View
		</button>
	</figcaption>
</figure>
    
  )
}

export default SiteCard