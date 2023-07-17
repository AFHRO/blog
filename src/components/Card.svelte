<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Post } from "../types/posts";
  import htmlCodeToSymbol from "../utils/htmlCodeToSymbol";

  export let post: Post;
  export let index: number;

  const postTitle =
    post.title.length > 100 ? `${post.title.substring(0, 50)}...` : post.title;

  $: categoryNameValue =
    typeof post.categoryName === "string"
      ? post.categoryName?.length > 15
        ? `${post.categoryName.substring(0, 15)}...`
        : post.categoryName
      : undefined;
</script>

<a
  class="post-card"
  href={`/blog/post/${post.slug}`}
  in:fade={{ delay: (index + 1) * 300 }}
  aria-label={post.title}
>
  <div class="post-card__content">
    <div class="post-card__image-wrapper">
      <img src={post.featured_media} alt={post.title} loading="lazy" />
    </div>
    <div>
      <h2>
        {@html htmlCodeToSymbol(postTitle)}
      </h2>
      <div class="post-card__author">
        by {post.author}
      </div>
    </div>
    <div class="post-card__info">
      <div class="post-card__info__category">
        {@html categoryNameValue}
      </div>
      <div class="post-card__info__date">
        {post.date}
      </div>
      <div class="post-card__info__length">
        {post.reading_time} min read
      </div>
    </div>
  </div>
</a>

<style lang="scss">
  h2 {
    margin-top: 16px;
    font-size: 2.2rem;
  }
  .post-card {
    height: 100%;
    text-decoration: none;
    max-width: 100%;
    @media screen and (min-width: 768px) {
      max-width: clamp(300px, 100%, 400px);
    }

    &__content {
      position: relative;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      height: 100%;
      box-shadow: var(--input-box-shadow);
      cursor: pointer;
      gap: 12px;
      padding: 8px;
      border-radius: 20px;
      border-width: 2px;
      border-style: solid;
      border-color: transparent;
      border-image: initial;
      transition: border 350ms ease 100ms, background-color 200ms ease;

      &:hover {
        background-color: var(--primary-background-color);
        .post-card__image-wrapper {
          transform: scale3d(1.05336, 1.05336, 1);

          &::after {
            opacity: 0;
          }
        }
      }
    }

    &__image-wrapper {
      position: relative;
      height: 220px;
      transition: transform 350ms ease 0s;
      transform-origin: 50% 100%;

      img {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 17px;
      }
      &::after {
        content: " ";
        position: absolute;
        inset: 0px;
        border-radius: 17px;
        background-color: rgb(199, 99, 88);
        opacity: 0.2;
        transition: opacity 350ms ease 0s;
      }
    }

    &:nth-child(odd) {
      .post-card {
        &__content:hover {
          border: 2px solid rgb(199, 99, 88);
        }

        &__image-wrapper img {
          border: 2px solid rgb(199, 99, 88);
        }
        &__info__category {
          color: rgb(199, 99, 88);
        }
      }
    }

    &:nth-child(even) {
      .post-card {
        &__content:hover {
          border: 2px solid rgb(237, 173, 104);
        }
        &__image-wrapper img {
          border: 2px solid rgb(237, 173, 104);
        }
        &__info__category {
          color: rgb(237, 173, 104);
        }
      }
    }

    &__author {
      font-size: 1.3rem;
      color: rgb(100, 116, 139);
      margin-top: 15px;
    }

    &__info {
      font-size: 1.2rem;
      color: rgb(100, 116, 139);
      display: flex;
      justify-content: space-between;
      border-top: 1px solid rgb(31, 48, 58);
      margin: auto -12px -8px;

      & > * {
        padding: 1.6rem 1.2rem;
        flex: 1 1 0%;
        text-align: center;

        &:nth-child(2) {
          border-left: 1px solid rgb(31, 48, 58);
          border-right: 1px solid rgb(31, 48, 58);
        }
      }
    }
  }
</style>
