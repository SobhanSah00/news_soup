import axios from "axios";
import { config } from "../config/enviorment.js"

export class NewsService {
  private baseUrl = "http://api.mediastack.com/v1/news";

  async getNewsByTopic(topic: string) {
    const res = await axios.get(this.baseUrl, {
      params: {
        access_key: config.MEDISTACK_NEWS_API_KEY,
        keywords: topic,
        countries: "us,in,gb,ca,au,fr,de,it,za,ng,sg,nz,ae,jp",
        languages: "en",
        limit: 5,
      },
    });

    console.log(res.data.data.map((a: any) => ({
      title: a.title,
      description: a.description,
      url: a.url,
      source: a.source,
      country: a.country,
    })));

    return res.data.data.map((a: any) => ({
      title: a.title,
      description: a.description,
      url: a.url,
      source: a.source,
      country: a.country,
    }));
  }
}
