<?php

interface ValidInterface {

}

interface I_Invalid {

}

class Article {

}

class ArticleFactory {
    public static function createArticle() {
        return new Article();
    }
}

class Test implements ValidInterface, I_Invalid
{
    public function __construct(
        private readonly ArticleFactory $articleFactory,
    )
    {

    }

    // Invalid method
    public function test(string $test1, string $test2) {
        $test =  $test1 === $test2 ? 'true' : 'false';

        //Invalid
        $test2 = $test === 'true' ? ($test1 === $test2 ? 'true' : 'false') : $test1;


        $article = $this->articleFactory->createArticle();

        //Invalid
        $article2 = new Article();


    }
}