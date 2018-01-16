package com.project.itrack.Item;

import com.project.itrack.Category.Category;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.RepositoryDefinition;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository extends CrudRepository<Item, Long>{
    Iterable<Item> findItemsByItemCategoryId(Long id);
}
