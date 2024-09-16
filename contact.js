<script>
  const cardContainer = document.querySelector('.card-container');
const cardScroll = document.querySelector('.card-scroll');

cardContainer.addEventListener('scroll', () => {
  const scrollPosition = cardContainer.scrollLeft;
  const cardWidth = cardScroll.children[0].offsetWidth;
  const activeCard = Math.round(scrollPosition / cardWidth);
  console.log(`Active card: ${activeCard + 1}`);
});
</script>