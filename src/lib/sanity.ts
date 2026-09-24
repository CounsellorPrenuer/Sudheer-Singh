import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const projectId = "angoprf6";
export const dataset = "production";
export const apiVersion = "2023-01-01";
export const token = "skWxQWlL5P5mpd86ku9wjHcui0yw6CclYlJoqQLZNXgnCJNI73rkbsCkL4Do0ecG6U8nGrshlL05aDmppCtBicdXTNHh52Q7ryCPnflxKaGUfGnhNvbmBArLjqOfVy61UeaOXw0H3lRxd3OasNrbhjDYgQperdz65DD4Bo7jouGnzi2tj4l8";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
