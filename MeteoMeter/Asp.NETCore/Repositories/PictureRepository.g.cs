
using Microsoft.EntityFrameworkCore; 
using System; 
using System.Collections.Generic; 
using System.Linq; 
using System.Threading.Tasks; 
using  MeteoMeter.Backend.Models;
using  MeteoMeter.Backend.DataModels;

namespace MeteoMeter.Backend.Repositories
{ 
    public class PictureRepository : Repository<Picture>, IPictureRepository
    { 
		public PictureRepository(ApplicationDbContext context) : base(context)
        {
        }

        public IQueryable<Picture> GetAllWithReferences()
        { 
            return DbContext.Set<Picture>().AsNoTracking(); 
        }

		public async Task<Picture> GetByIdWithReferences(int id)
        {
            return await DbContext.Set<Picture>().FirstOrDefaultAsync(p=>p.Id == id);
        }
    } 
}