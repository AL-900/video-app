/** @format */

import TagItem from "./TagItem";

function TagList() {
	return (
		<section>
			<div className='max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto'>
				<TagItem />
			</div>
		</section>
	);
}

export default TagList;
