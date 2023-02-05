import React, { useState } from 'react';
import LeftMenu from "./leftmenu/LeftMenu"
import "./css/MovieApp.scss"



/**
 * 기본 컨포넌트
 */
function Base() {


	return (
		<>
			<LeftMenu />

			<section>
				<div class="content-list">
					<h1>한국이 만든 콘텐츠</h1>
					<div class="slider">
					</div>
					<div class="prev"><i class="fa-solid fa-angle-right prev-arrow"></i></div>
					<div class="next"><i class="fa-solid fa-angle-right"></i></div>
				</div>
			</section>
		</>
	)

}

export default Base;

/*
<script>
	const next = document.querySelectorAll('.next');
	const prev = document.querySelectorAll('.prev');
	const slider = document.querySelectorAll('.slider')

	for (let i = 0; i < slider.length; i++) {
		getMovies(slider[i], i + 1);
		makeSlider(slider[i], prev[i], next[i]);
	}
	function makeSlider(element, prev, next) {
		next.addEventListener('click', () => {
			const offsetX = element.offsetWidth;
			element.scrollBy(offsetX, 0)
		})
		prev.addEventListener('click', () => {
			const offsetX = element.offsetWidth;
			element.scrollBy(-offsetX, 0)
		})
	}
	function getMovies(element, page) {
		fetch(`https://yts.mx/api/v2/list_movies.json?limit=20&sort_by=rating&page=${page}`)
			.then(data => data.json())
			.then(data => {
				const movies = data.data.movies;
				movies.forEach(movie => {
					const div = document.createElement('div');
					div.className = 'item';
					div.innerHTML = `<img src="${movie.medium_cover_image}" alt="">`;
					element.appendChild(div);
				})
			})
	}
</script>
*/