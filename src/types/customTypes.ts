
export type Article = {
  id: string;
  image: string;
  title: string;
  desc: string;
  sujet: string;
  content:string;
  _uploadedAt: string;
};

export type Partenariats={
    id:string,
    name_org:string,
    desc:string,
    image:string,
    website:string
}

export type Produits={
    id:string,
    type:string,
    name_product:string,
    image:string,
    price:number,
    desc:string,
    likes:number,
    _uploadedAt:string
}

export type Sponsors={
    id:string,
    organisme:string,
    desc:string,
    content:string,
    image:string,
    link:string
}

export type Formations={
    id:string,
    title:string,
    domain:string,
    status:"free"|"payant",
    type: "pdf" | "video",
    price:number,
    likes:number,
    image:string,
    _uploadedAt:string
}   

export type Domaine={
    id:string,
    type:"cybersecurity"|"hacking"|"data"|"webdev"
}




