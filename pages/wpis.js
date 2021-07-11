import image01 from 'assets/blog-entry/test-image.png';
import React from 'react';
import Post from 'views/post';

const BlogEntry = () => {

  return (
    <Post post={post} />
  );
}

  const post = {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor eu lorem commodo, sed lacinia est accumsan.",
    date: "2011-10-05T14:48:00.000",
    featuredImage: {
      node: {
        sourceUrl: image01,
      },
    },
    content:
      "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis magna eros. Aliquam erat volutpat. Fusce volutpat nisi non pulvinar ornare. Donec efficitur mauris non tortor consectetur, non lacinia diam imperdiet.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor eu lorem commodo, sed lacinia est accumsan. Maecenas magna risus, mollis ac sapien quis, rhoncus placerat ex. Sed sed arcu convallis, varius urna vestibulum, cursus lectus. Cras ac tristique erat. Integer sodales sed ligula consequat dapibus. Vivamus lacinia vulputate risus vel lobortis. Proin bibendum viverra sapien ornare ornare. Mauris cursus lectus eu ligula vehicula, at elementum massa varius. Vestibulum dolor nulla, consectetur nec arcu accumsan, laoreet suscipit augue. Ut nec pulvinar lacus. Maecenas placerat ligula feugiat molestie laoreet. Sed et erat eu eros egestas congue.</p><p>Aliquam in nibh mauris. Curabitur vel rhoncus eros, ac consequat dolor. Pellentesque vitae tortor ligula. Cras vestibulum, augue ac efficitur volutpat, ligula ipsum sollicitudin lorem, et eleifend lorem lorem quis tortor. Nullam consequat sit amet quam non rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sagittis dignissim enim, a ullamcorper tortor maximus quis. Pellentesque bibendum viverra consectetur. Mauris aliquet, magna et congue porttitor, risus nibh aliquet lorem, eget porta massa nunc at urna.</p><p>Mauris luctus ut libero eget ullamcorper. Praesent ultrices commodo nisl, vel cursus nisl malesuada porta. Quisque faucibus tristique sapien sit amet venenatis. Sed commodo nulla leo, ut suscipit arcu malesuada id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique semper nisl, in ornare turpis. Etiam dapibus lacus a orci hendrerit, vitae condimentum lacus vulputate. Proin fermentum mauris non ante congue efficitur et et velit. Nulla eros nulla, posuere quis urna aliquam, dictum finibus velit. Proin cursus scelerisque sapien molestie ultrices. Pellentesque vitae leo vel est rutrum euismod quis nec quam. Vestibulum dapibus ipsum at mauris tristique, ut tincidunt elit eleifend.</p><p>Aenean et libero enim. Aliquam augue risus, placerat id diam sed, euismod imperdiet ipsum. Ut non ultricies purus. Ut varius arcu eget pellentesque tincidunt. Etiam id augue est. Phasellus nec erat mi. Curabitur sit amet elit id ex porttitor aliquam et sed dui. Integer luctus lacinia justo, at pulvinar tellus pellentesque quis.</p>",
    category: "Tłumaczenia ustne",
    time: "6 min",
  };

export default BlogEntry
