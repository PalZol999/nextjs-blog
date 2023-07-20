
import PostPreview from '@/components/PostPreview';
import getPostMetadata from '@/components/getPostMetaData';


 
const HomePage = () => {
  const getMetadata = getPostMetadata()
  const postPreviews = getMetadata.map((post) => (
 <PostPreview key={post.slug} {...post} />
  ))
  return(
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {postPreviews}
      </div>
  )

}

export default HomePage