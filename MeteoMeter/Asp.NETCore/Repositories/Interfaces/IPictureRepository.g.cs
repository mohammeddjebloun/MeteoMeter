
﻿using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks;
using MeteoMeter.Backend.DataModels;
 
namespace MeteoMeter.Backend.Repositories
{ 
    public interface IPictureRepository : IRepository<Picture>
    { 
		IQueryable<Picture> GetAllWithReferences();
		Task<Picture> GetByIdWithReferences(int id);
    } 
}