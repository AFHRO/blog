<div>
  <div class="skeleton-card">
    <div class="skeleton-card__image" />
    <div class="skeleton-card__content">
      <div class="skeleton-card__title" />
      <div class="skeleton-card__category" />
      <div class="skeleton-card__info" />
    </div>
  </div>
</div>

<style lang="scss">
  @mixin skeleton {
    background-color: var(--skeleton-background-grey);

    background-image: linear-gradient(
      90deg,
      var(--skeleton-background-grey),
      var(--skeleton-background-light-grey),
      var(--skeleton-background-grey)
    );
    background-size: 200%;
    animation: skeleton 1.5s ease-in-out infinite;
    border-radius: 2rem;
  }
  .skeleton-card {
    position: relative;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: 100%;
    gap: 12px;
    border-radius: 2rem;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    transition: border 350ms ease 100ms, background-color 200ms ease;

    &__image {
      position: relative;
      height: 220px;
      @include skeleton;
    }

    &__title {
      height: 10rem;
      @include skeleton;
    }

    &__category {
      height: 20px;
      width: 8rem;
      margin-top: 2rem;
      @include skeleton;
    }

    &__info {
      margin-top: 2rem;
      height: 5rem;
      @include skeleton;
    }

    @keyframes skeletonFade {
      0% {
        background-position: 0%;
      }
      50% {
        background-position: 100%;
      }
      100% {
        background-position: 0%;
      }
    }
  }
</style>
